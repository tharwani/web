<html>
<head>
  <title>
    Form with validation
  </title>
<style>


</style>  
</head>
<body>
<div class="container">
<h1 class="heading2">Login</h1>

  <?php
  function take_input($data)
  {
    $data=trim($data);
    $data=stripslashes($data);
    return $data;
  }
  $name=$mail=$gender=$phone=$pass=$pass2=$address="";
  $nameErr=$mailErr=$genderErr=$phoneErr=$passErr=$addressErr="";
  if($_SERVER["REQUEST_METHOD"]=="POST")
  {
    if(empty($_POST["txtName"])){
      $nameErr="Username field cannot be empty";
    }
    else {
      $name=take_input($_POST["txtName"]);
      if(!preg_match("/^[a-zA-z ]{3,10}$/",$name))
      {
        $nameErr="Please provide a valid username";
      }

    }
    if(empty($_POST["txtMail"]))
    {
      $mailErr="E-mail field cannot be left empty";
    }
    else {
      $mail=($_POST["txtMail"]);
    }
    $pass=$_POST["pass"];
    $pass2=$_POST["CnfPass"];
    if(empty($pass)||empty($pass2))
    {
	$passErr="Password/Confirm Password cannot be left empty";	
    }
    elseif($pass!=$pass2)
    {
	$passErr="Passwords do not match";
    }	
    $phone=$_POST["phone"];
    if(strlen($phone)<10)
    {
	$phoneErr="Please Enter a valid Phone Number";
    }
    $address=$_POST["address"];
    if(empty($address))
    {
	$addressErr="Address cannot be left empty";
    }
	
   /* if(!isset($_POST["gender"]))
    {
      $genderErr="Please select a gender";
    }
    else
    {
        $gender=($_POST["gender"]);
    }*/


  }

?>
<center>  <form name="register"action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post">
<table>
<tr>
  <td>Name Of NGO/Organisation:</td><td><input type="text" name="txtName" placeholder="Enter your name" value="<?php echo $name?>"/>
  <span>*<?php echo $nameErr;?></span></td><br>
</tr>
<tr>
<td> 
 E-mail:</td><td><input type="text" name="txtMail" placeholder="Enter your e-mail ID" value="<?php echo $mail;?>"/>
  <span>*<?php echo $mailErr;?></span></td></tr><br>
<tr>
  <td>Password:</td><td><input type="password" name="pass" <?php if($passErr=='')echo "value='{$pass}'";?> ><span>*<?php echo "{$passErr}" ?></span></td></tr><br>
<tr><td>  
Confirm Password:</td><td><input type="password" name="CnfPass" <?php if($passErr=='')echo "value='{$pass}'";?>><span>*</span></tr></td><br>
<tr><td>  
Address:<span><?php echo $addressErr;?></span></td>
<td>
<textarea name="address"><?php echo $address;?></textarea></td></tr><br>
<tr><td>
Mobile:</td><td><input type="text" placeholder="Enter your contact number" value="<?php echo $phone ;?>" name="phone"><span>*<?php echo $phoneErr;?></span></td></tr></table>
<!--Gender:<span>*<?php echo $genderErr;?></span><br>
  <input type="radio" name="gender" value="Male" <?php if(isset($_POST["gender"])&&$gender=="Male")echo "checked"?>>Male<br>
  <input type="radio" name="gender" value="Female" <?php if(isset($_POST["gender"])&&$gender=="Female")echo "checked"?>>Female<br>
  -->
<br>
  <input type="submit" value="SUBMIT" name="submit">
</form></center>
</div>
</body>
<?php
$flag=0;
if($nameErr==""&&$mailErr==""&&$phoneErr==""&&$passErr==""&&$addressErr==""&&isset($_POST["submit"]))
{
    $flag=1;
    $host="localhost";
    $dbuser="root";
    $dbpass="kesh2208";
    $dbname="comp";
    $conn=mysqli_connect($host,$dbuser,$dbpass,$dbname);
    if(mysqli_connect_errno())
    {
      die("could not connect to database!".mysqli_connect_error());
    }
    
}

if($flag==1)
{
$sql="INSERT INTO list(name,Email,Password,Address,Mobile) VALUES('$name','$mail','$pass','$address','$phone')";
$res=mysqli_query($conn,$sql);
if(!$res)
{
  die("Failed to register.Try Again Later...");
}
else
{
	echo "Registered Succesfully..";
}
}
 ?>

</html>
<?php
if($flag==1)
mysqli_close($conn);

 ?>

