# 🧠 PHP Local Development Dashboard

A lightweight, shell-based PHP development environment powered by `zsh` — no MAMP or XAMPP required.  
Built for convenience, speed, and flexibility using custom functions defined in `~/.zshrc`.

---

## ⚙️ Overview

This setup gives you an instant way to:
- Launch and stop multiple PHP servers with one command ⚡️  
- Manage different PHP versions (8.3 / 8.4) easily 🔁  
- View all running projects from a single dashboard 🖥️  
- Auto-open projects in your browser 🚀  

---

## 🧩 Core Commands

### 1. `servephp`
Start a PHP server on any port, for any folder, using any PHP version.

```bash
servephp [port] [root_directory] [php_binary]

Examples:

servephp                   # start current folder on port 8000 with PHP 8.4
servephp 8080 ~/Sites/test # custom folder and port
servephp 5555 ~/shop /opt/homebrew/opt/php@8.3/bin/php # run with PHP 8.3

Features:
	•	Colorful CLI feedback (port, root, PHP version)
	•	Saves process info (.pid and .meta files)
	•	Opens your browser automatically
	•	Integrates with devdash

⸻

2. stopphp

Stops a running PHP server gracefully (or force-stops if needed).

stopphp [port]

Examples:

stopphp        # stops port 8000 (default)
stopphp 5555   # stops custom port 5555

🧹 Cleans up PID/meta files
💀 Kills orphan processes
✅ Works even if the PID file is stale

⸻

3. devdash / devlist

Lists all active and stale PHP servers managed by your helpers.

devdash
# or
devlist

Example Output:

PORT     STATUS     ROOT                                     PHP                  STARTED
---------------------------------------------------------------------------------------------------------------
8000     RUNNING    /Users/hazmin/Coding_Practices/php/my_project      php/bin/php       2025-10-27 15:32:12
8080     RUNNING    /Users/hazmin/Coding_Practices/php/phpmyadmin      php@8.3/bin/php   2025-10-27 15:32:18

Tips: open a URL:  `open http://127.0.0.1:<port>`
      stop a port: `stopphp <port>`

Columns:

Column	Meaning
PORT	Listening port number
STATUS	🟢 RUNNING if alive, 🟡 STALE if only PID file exists
ROOT	Project directory
PHP	PHP binary used
STARTED	Timestamp when launched


⸻

4. smartserve / smartstop

Quick-launcher for subprojects inside your PHP workspace.

smartserve <project_name> [port]
smartstop [port]

Examples:

smartserve shop 5555
smartstop 5555

✨ Features:
	•	Auto-detects project directory (~/Coding_Practices/php/<project_name>)
	•	Opens in browser
	•	Integrated with dashboard
	•	Cleans up automatically when stopped

⸻

🧰 Utility Aliases

Alias	Description
devlist	Shortcut for devdash
devstop	Shortcut for stopphp
zshbackup	Backs up your .zshrc with timestamp

zshbackup
# ✅ .zshrc backed up!


⸻

🗂️ File Management

Each running server creates two small tracking files in your home folder:

~/.servephp-<port>.pid
~/.servephp-<port>.meta

File	Purpose
.pid	Stores process ID
.meta	Contains root path, PHP binary, and timestamp

To clean up all tracking files:

rm ~/.servephp-*.pid ~/.servephp-*.meta 2>/dev/null


⸻

🚦 Status Colors

Color	Status	Meaning
🟢 Green	RUNNING	PHP server is alive
🟡 Yellow	STALE	PID/meta file exists, but process is gone


⸻

🧭 Typical Workflow

# Start your main project
serve

# Start phpMyAdmin
pma

# Launch another project quickly
smartserve myapp 5555

# View all servers
devdash

# Stop phpMyAdmin
pma-stop

# Stop the custom one
smartstop 5555

# Stop everything else
stopphp 8000


⸻

🧙 Tips & Tricks

🌐 Custom Hostnames

Add entries in /etc/hosts to use friendly URLs:

127.0.0.1   myproject.test
127.0.0.1   pma.test

Then access your projects at:
	•	http://myproject.test:8000
	•	http://pma.test:8080

🔁 Reload .zshrc

source ~/.zshrc

💾 Quick Backup

zshbackup

🧹 Clean All Servers

stopphp 8000
stopphp 8080
smartstop 5555


⸻

🧩 Glossary

Term	Meaning
PID	Process ID — identifies a running PHP server
Meta File	Metadata (root path, PHP version, timestamp)
Stale	PID file exists but no running process
Disown	Keeps a background process running after terminal closes


⸻

🪄 Bonus: Example Project URLs

Project	Port	URL
phpMyAdmin	8080	http://pma.test:8080
My Project	8000	http://myproject.test:8000
Shop	5555	http://127.0.0.1:5555


⸻

🧩 System Requirements
	•	macOS with Homebrew
	•	PHP 8.3 and PHP 8.4 installed via Homebrew
	•	zsh (default shell on modern macOS)
	•	Optional: custom hostnames set in /etc/hosts

⸻

🧾 Created by Hazmin Chik for a clean, fast, and flexible PHP dev workflow.