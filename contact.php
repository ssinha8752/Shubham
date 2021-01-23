<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];


if(empty($name)|| empty($email) || empty($message))
{
    echo "Please fill all the fields";
}
else
{
    mail("shubhamsinha8752@gmail.com", "PORTFOLIO - Get in touch", $message, "From: $name <$email>")
    echo "<script type='text/javascript'>alert('Your message sent successfully'); window.history.log(-1)</script>";
}
?>