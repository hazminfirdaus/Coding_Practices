
# Created by `pipx` on 2024-11-12 10:30:00
export PATH="$PATH:/Users/hazmin/.local/bin"

alias zshbackup='cp ~/.zshrc ~/.zshrc.backup-$(date +%Y%m%d-%H%M%S) && echo "✅ .zshrc backed up!"'

# --- PHP version switcher ---
alias php83='brew unlink php && brew link --force --overwrite php@8.3 && php -v'
alias php84='brew unlink php@8.3 && brew link --force --overwrite php && php -v'

# --- Enhanced servephp: saves PID + metadata for the dashboard ---
servephp() {
  local port="${1:-8000}"
  local root="${2:-$PWD}"
  local phpbin="${3:-/opt/homebrew/opt/php/bin/php}"  # default PHP 8.4
  local pidfile="$HOME/.servephp-$port.pid"
  local metafile="$HOME/.servephp-$port.meta"

  echo -e "\033[1;34m▶ Starting PHP server on port $port\033[0m"
  echo -e "\033[0;36m   Root: $root\033[0m"
  echo -e "\033[0;36m   PHP:  $phpbin\033[0m"

  "$phpbin" -S 127.0.0.1:"$port" -t "$root" &
  echo $! > "$pidfile"
  disown

  echo "root=$root" > "$metafile"
  echo "php=$phpbin" >> "$metafile"
  echo "started=$(date '+%Y-%m-%d %H:%M:%S')" >> "$metafile"

  sleep 1
  if lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null; then
    echo -e "\033[1;32m✔ http://127.0.0.1:$port\033[0m"
    open "http://127.0.0.1:$port"
  else
    echo -e "\033[1;31m✖ Failed to start on $port\033[0m"
  fi
}

stopphp() {
  local port="${1:-8000}"
  local pidfile="$HOME/.servephp-$port.pid"
  local metafile="$HOME/.servephp-$port.meta"

  echo -e "\033[1;33m⏹ Stopping server on $port...\033[0m"
  if [[ -f "$pidfile" ]]; then
    kill "$(cat "$pidfile")" 2>/dev/null && rm -f "$pidfile" "$metafile"
    echo -e "\033[1;32m✔ Stopped $port\033[0m"
  elif lsof -ti tcp:"$port" >/dev/null; then
    lsof -ti tcp:"$port" | xargs -r kill -9
    rm -f "$metafile"
    echo -e "\033[1;32m✔ Force-stopped $port\033[0m"
  else
    echo -e "\033[1;31m✖ No server on $port\033[0m"
  fi
}

# --- Dev dashboard: list running servers from your helpers ---
devdash() {
  local RED="\033[1;31m" GRN="\033[1;32m" YLW="\033[1;33m" BLU="\033[1;34m" CYN="\033[0;36m" RST="\033[0m"
  local any=0

printf "${BLU}%-8s %-10s %-40s %-28s %-22s${RST}\n" "PORT" "STATUS" "ROOT" "PHP" "STARTED"
printf "${BLU}%s${RST}\n" "---------------------------------------------------------------------------------------------------------------"

for pidfile in $(ls "$HOME"/.servephp-*.pid 2>/dev/null); do
  [[ -e "$pidfile" ]] || continue
  any=1
  local port pid meta root php started state
  port="${pidfile##*-}"; port="${port%.pid}"
  pid="$(cat "$pidfile" 2>/dev/null)"
  meta="$HOME/.servephp-$port.meta"
  root="$(grep '^root=' "$meta" 2>/dev/null | sed 's/^root=//')"
  php="$(grep '^php=' "$meta" 2>/dev/null | sed 's/^php=//')"
  started="$(grep '^started=' "$meta" 2>/dev/null | sed 's/^started=//')"

    if ps -p "$pid" >/dev/null 2>&1; then
      state="${GRN}RUNNING${RST}"
    else
      state="${YLW}STALE${RST}"
    fi

    printf "%-8s %-10b %-40s %-28s %-22s\n" "$port" "$state" "${root:-?}" "$(basename "${php:-?}")" "${started:-?}"
  done

  if [[ $any -eq 0 ]]; then
    echo -e "${YLW}No managed servers found.${RST}"
  else
    echo
    echo -e "${CYN}Tips:${RST} open a URL:  \`open http://127.0.0.1:<port>\`"
    echo -e "${CYN}      stop a port: \`stopphp <port>\`${RST}"
  fi

  # Also show any php -S listeners not started via our helpers (fallback)
  if lsof -nP -iTCP -sTCP:LISTEN | grep -q ' php '; then
    echo
    echo -e "${BLU}Other php -S listeners (not tracked by PID files):${RST}"
    lsof -nP -iTCP -sTCP:LISTEN | awk '/ php /{print $2"\t"$9}' | sed 's/->.*//'
  fi
}

# convenience wrappers if you like:
alias devlist='devdash'
alias devstop='stopphp'   # usage: devstop 8000

# --- open pma, serve page, browser ---
PROJECT_ROOT="$HOME/Coding_Practices/php"

pma() {
  local port=8080
  local pidfile="$HOME/.servephp-$port.pid"
  local metafile="$HOME/.servephp-$port.meta"
  local phpbin="/opt/homebrew/opt/php@8.3/bin/php"
  local root="$PROJECT_ROOT/phpmyadmin"

  echo -e "\033[1;34m▶ Launching phpMyAdmin (PHP 8.3) on pma.test:$port...\033[0m"

  "$phpbin" -S pma.test:"$port" -t "$root" &
  echo $! > "$pidfile"
  disown

  {
    echo "root=$root"
    echo "php=$phpbin"
    echo "started=$(date '+%Y-%m-%d %H:%M:%S')"
  } > "$metafile"

  sleep 1
  open "http://pma.test:$port"
  echo -e "\033[1;32m✔ phpMyAdmin is live at http://pma.test:$port\033[0m"
}

pma-stop() { stopphp 8080; }

serve() {
  local port=8000
  local pidfile="$HOME/.servephp-$port.pid"
  local metafile="$HOME/.servephp-$port.meta"
  local phpbin="/opt/homebrew/opt/php/bin/php"
  local root="$PROJECT_ROOT/my_project"

  echo -e "\033[1;34m▶ Launching My Project (PHP 8.4) on myproject.test:$port...\033[0m"

  "$phpbin" -S myproject.test:"$port" -t "$root" &
  echo $! > "$pidfile"
  disown

  {
    echo "root=$root"
    echo "php=$phpbin"
    echo "started=$(date '+%Y-%m-%d %H:%M:%S')"
  } > "$metafile"

  sleep 1
  open "http://myproject.test:$port"
  echo -e "\033[1;32m✔ My Project is live at http://myproject.test:$port\033[0m"
}

serve-stop() { stopphp 8000; }


# --- smart serve and smart stop ---
smartserve() {
  local project_dir="$HOME/Coding_Practices/php/$1"
  local port="${2:-8000}"
  local phpbin="/opt/homebrew/opt/php/bin/php"
  local pidfile="$HOME/.servephp-$port.pid"

  if [[ ! -d "$project_dir" ]]; then
    echo -e "\033[1;31m✖ Project folder not found: $project_dir\033[0m"
    return 1
  fi

  echo -e "\033[1;34m▶ Launching $1 on port $port...\033[0m"
  cd "$project_dir" || return

  # Correct background + PID capture
  "$phpbin" -S 127.0.0.1:"$port" -t "$project_dir" &
  echo $! > "$pidfile"
  disown

  # save metadata for devdash
  echo "root=$project_dir" > "$HOME/.servephp-$port.meta"
  echo "php=$phpbin" >> "$HOME/.servephp-$port.meta"
  echo "started=$(date '+%Y-%m-%d %H:%M:%S')" >> "$HOME/.servephp-$port.meta"

  sleep 1
  open "http://127.0.0.1:$port"
  echo -e "\033[1;32m✔ $1 is live at http://127.0.0.1:$port\033[0m"
}

smartstop() {
  local port="${1:-8000}"
  local pidfile="$HOME/.servephp-$port.pid"

  echo -e "\033[1;33m⏹ Attempting to stop PHP server on port $port...\033[0m"

  # Stop via saved PID if possible
  if [[ -f "$pidfile" ]]; then
    local pid
    pid="$(cat "$pidfile" 2>/dev/null)"
    if [[ -n "$pid" && "$(ps -p "$pid" -o comm= 2>/dev/null)" == *"php"* ]]; then
      kill "$pid" 2>/dev/null && rm -f "$pidfile"
      echo -e "\033[1;32m✔ Stopped PHP server (PID $pid)\033[0m"
      return
    else
      echo -e "\033[1;33m⚠ PID file found but process is stale or not PHP. Cleaning up...\033[0m"
      rm -f "$pidfile"
    fi
  fi

  # Fallback: kill any PHP process listening on that port
  local pids
  pids=$(lsof -ti tcp:"$port" -sTCP:LISTEN)
  if [[ -n "$pids" ]]; then
    echo "$pids" | xargs -r kill -9
    echo -e "\033[1;32m✔ Force-stopped process(es) on port $port ($pids)\033[0m"
  else
    echo -e "\033[1;31m✖ No running server found on port $port\033[0m"
  fi
}