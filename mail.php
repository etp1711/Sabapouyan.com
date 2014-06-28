<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8" />
	<title>Sending Mail ...</title>
	<style type="text/css">

		.ok{
			color:#23B3AB;
		}

		.err {
			color:#BD5B3D;
		}

	</style>
</head>
<body>

	<?php

	error_reporting(E_ALL ^ E_NOTICE);

	$admin   = 'info@sabapouyan.com';

	$name    = $_POST['name'];
	$mail    = $_POST['email'];
	$messege = $_POST['messege'];
	if( strlen($name) >= 3 && strlen($mail) >= 7 && strlen($messege) >= 10){
		if( @mail(
			$admin,

			" sabapouyan.com contact : $name <$mail>",

			$messege)
			){

			echo "<h1 class='ok'>پیام شما ارسال شد !</h1>";

		}else {

			echo "<h1 class='err'>خطا در ارسال پیام !</h1>";
		}
		
	}else{

		echo "<h1 class='err'>Access Restricted!!!</h1>";
	}
	?>
</body>
</html>