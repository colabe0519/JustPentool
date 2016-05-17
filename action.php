<!DOCTYPE html>
<html>
<head>
	<title>Comments Submit</title>
</head>
<body>
<?php

$myname = $_GET['myname'];
$myemail = $_GET['myemail'];
$mycomments = $_GET['mycomments'];
if ($myname == ""){
	print '<p>You need to fill in the <a href="contact.html">form!</a> </p>';
} else {
	mail("colabe0519@hotmail.com",$myname,$myemail,$mycomments);
  mail("liweimin824@gmail.com",$myname,$myemail,$mycomments);
	print '<p>Thank you for emailing us! go back homepage <a href="http://hsinhualee.com/w5_team/index.html">Homepage</a></p>';
}

?>
</body>
</html>