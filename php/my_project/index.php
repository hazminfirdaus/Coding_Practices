<?php
$home = getenv('HOME');
$files = glob("$home/.servephp-*.meta");
date_default_timezone_set('Europe/Prague'); // adjust if needed

function is_port_open($port) {
    $connection = @fsockopen('127.0.0.1', $port, $errno, $errstr, 0.2);
    if (is_resource($connection)) {
        fclose($connection);
        return true;
    }
    return false;
}

function h($str) {
    return htmlspecialchars($str ?? '', ENT_QUOTES);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Dev Dashboard</title>
<style>
body {
    font-family: "Inter", sans-serif;
    background: #0f1117;
    color: #eee;
    margin: 0;
    padding: 2rem;
}
h1 {
    text-align: center;
    color: #00c896;
}
table {
    width: 100%;
    border-collapse: collapse;
    background: #1a1d27;
    border-radius: 10px;
    overflow: hidden;
}
th, td {
    padding: 0.75rem 1rem;
    text-align: left;
}
th {
    background: #232733;
    font-weight: 600;
    color: #88a;
    text-transform: uppercase;
    font-size: 0.85rem;
}
tr:nth-child(even) { background: #181b24; }
tr:hover { background: #212634; }
a { color: #00c896; text-decoration: none; }
a:hover { text-decoration: underline; }
.status { font-weight: 600; }
.running { color: #5effb0; }
.stale { color: #ffb94d; }
.dead { color: #ff5e5e; }
footer {
    text-align: center;
    margin-top: 2rem;
    color: #777;
    font-size: 0.9rem;
}
</style>
</head>
<body>
<h1>💻 Local Dev Dashboard</h1>
<table>
<thead>
<tr>
  <th>Port</th>
  <th>Status</th>
  <th>Root</th>
  <th>PHP Binary</th>
  <th>Started</th>
</tr>
</thead>
<tbody>
<?php if (!$files): ?>
<tr><td colspan="5" style="text-align:center; color:#888;">No servers found.</td></tr>
<?php else: ?>
<?php foreach ($files as $file): ?>
<?php
    preg_match('/(\d+)\.meta$/', $file, $m);
    $port = $m[1] ?? '?';
    $meta = parse_ini_file($file);
    $pidfile = "$home/.servephp-$port.pid";

    $root = $meta['root'] ?? '?';
    $php = basename($meta['php'] ?? '?');
    $started = $meta['started'] ?? '?';

    $running = false;
    if (file_exists($pidfile)) {
        $pid = trim(@file_get_contents($pidfile));
        if ($pid && posix_kill((int)$pid, 0)) {
            $running = true;
        }
    }
    $listening = is_port_open($port);
    $status = $running || $listening ? 'RUNNING' : 'STALE';
    $class = $running || $listening ? 'running' : 'stale';
?>
<tr>
  <td><a href="http://127.0.0.1:<?=h($port)?>" target="_blank"><?=h($port)?></a></td>
  <td class="status <?=$class?>"><?=h($status)?></td>
  <td><?=h($root)?></td>
  <td><?=h($php)?></td>
  <td><?=h($started)?></td>
</tr>
<?php endforeach; ?>
<?php endif; ?>
</tbody>
</table>
<footer>
Managed via <code>smartserve</code> / <code>devdash</code> – powered by PHP 💫
<br>Created by Hazmin ⚡
</footer>
</body>
</html>