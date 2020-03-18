<!DOCTYPE html>

<?php
		require_once("dbconn.php");
		session_start();
    $count = $_SESSION['count'];
?>

<html>

  <head>
    <title>Vocabulary</title>
    <link href="main.css" rel ="stylesheet">
  </head>

  <body>

    <?php

        $A =  $_SESSION['A'];
        $B =  $_SESSION['B'];
        $C =  $_SESSION['C'];
        $D =  $_SESSION['D'];
        $E =  $_SESSION['E'];

        echo "$A<br>";
        echo "$B<br>";
        echo "$C<br>";
        echo "$D<br>";
        echo "$E<br>";
        $vocab = array($A, $B, $C, $D, $E);

        $q = "SELECT * FROM Ch1Vocab WHERE VocabID = ".$vocab[$count];
        if($result = $conn->query($q))
        {
           $row = $result->fetch_array();
        }
        echo "<form action = 'vocab.php' method='post'>";
        echo "<h2>Here are your questions</h2>";
        echo "What does <b>" . $row['Vocab'] . "</b> means? <br>";
        echo "<button class='button' type = 'submit' name='choice' value ='".$row['Choice1']."'>" . $row['Choice1'] . "</button>";
        echo "<button class='button' type = 'submit' name='choice' value ='".$row['Choice2']."'>" . $row['Choice2'] . "</button>";
        echo "<button class='button' type = 'submit' name='choice' value ='".$row['Choice3']."'>" . $row['Choice3'] . "</button>";
        echo "</form><br>";

				$choice = $_POST['choice'];
				$_SESSION['choice'] = $choice;

        echo $_SESSION['count']."<br>";
        echo $_SESSION['choice']."<br>";
        echo $row['Meaning']."<br>";

        if(isset($_SESSION['choice']))
          {
            if($choice == $row['Meaning'])
            {
              echo "Your answer is correct!";
              echo "<form action = 'vocab.php' method='post'>";
              echo "<button class='button' type='submit' name='next' value='next'>Next Question</butoon>";
              echo "</form>";
            }
            else
            {
              echo "Your answer is wrong :( Please try again";
            }
          }

        if(isset($_POST['next']))
        {
          $count += 1;
        }
        $_SESSION['count'] = $count;

    ?>

  </body>

</html>
