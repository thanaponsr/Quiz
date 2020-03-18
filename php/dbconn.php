<?php
$conn = new mysqli('localhost','root','root','trigger');
if ($conn->connect_errno)
{
	echo "Connect Fail!";
}
?>
