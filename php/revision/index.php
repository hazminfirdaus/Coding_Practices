<?php
    echo "PHP Version: " . phpversion();

    $name = "PHP Learner";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Revision</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button id="theme-toggle" title="Toggle light/dark mode">🌙</button>

    <h1>Welcome to PHP Revision Page</h1>
    <p>This page is created for me as I revise PHP concepts.</p>

    <p>Current Date and Time: 
        <?php echo date('Y-m-d H:i:s'); ?>
    </p>
    
    <h1><?php echo "Hello, $name!"; ?></h1>

    <h2>Basic PHP Concepts</h2>
    <ul>
        <li>Variables and Data Types</li>
        <li>Control Structures</li>
        <li>Functions</li>
        <li>Arrays</li>
        <li>Object-Oriented Programming</li>
    </ul>

    <h3>Let's echo some PHP!</h3>
    <p class="php-output">
        <?php
        eChO "PHP is case-insensitive for its keywords.<br>";
        ECHO "Uppercase 'ECHO' is the same as lowercase 'echo'.<br>";
        eCHo "Mixed case 'EcHo' also works fine.<br>";
        ?>
    </p>

    <h4>However, <em>variable names</em> are <em>case-sensitive:</em></h4>

    <p class="php-output">
        <?php
        $Var = "\$Var = This is variable with uppercase V.";
        $var = "\$var = This is variable with lowercase v.";

        echo $Var . "<br>"; // Outputs: This is variable with uppercase V.
        echo $var . "<br>"; // Outputs: This is variable with lowercase v.
        ?>
    </p>

    <h3>Comments in PHP</h3>
    <p class="php-output">
        <?php
        // This is a single-line comment
        echo "Single-line comment:<br>";
        echo "// This is a single-line comment. // <br>";
        echo "# This is another single-line comment. # <br>";
        /* This is a 
           multi-line comment */
        echo "<br>";
        echo "Multi-line comment:<br>";
        echo "/* This is a multi-line comment. */<br>";
        ?>
    </p>

    <h3>Declaring PHP Variables</h3>
    <p class="php-output">
        <?php
        $name = "PHP Learner";
        $age = 25;
        $isLearning = true;
        $isLearning = false; // Reassigning to false
        $isBored = false;

        echo "Variables declared:<br>";
        echo "\$name = \"$name\";<br>";
        echo "\$age = $age;<br>";
        echo "\$isLearning = " . ($isLearning ? "true" : "false") . ";<br>";
        echo "\$isBored = " . ($isBored ? "true" : "false") . ";<br>";

        echo "<br>Outputting variable values:<br>";
        echo "Name: $name<br>";
        echo "Age: $age<br>";
        echo "Is Learning: " . ($isLearning ? "Yes" : "No") . "<br>";
        echo "Is Bored: " . ($isBored ? "Yes" : "No") . "<br>";
        ?>
    </p>

    <script>
      // --- Manual Theme Toggle ---
      const toggleBtn = document.getElementById('theme-toggle');
      const currentTheme = localStorage.getItem('theme');

      if (currentTheme === 'light') {
        document.documentElement.classList.add('light');
        toggleBtn.textContent = '🌞';
      }

      toggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        const isLight = document.documentElement.classList.contains('light');
        toggleBtn.textContent = isLight ? '🌞' : '🌙';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
      });
    </script>

    <footer>
        <p>&copy; 2025 Hazmin's PHP Revision</p>
    </footer>
</html>