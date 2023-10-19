if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['name'])
        && !empty($_POST['email'])
        && !empty($_POST['message'])
    ){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];


        $to = "your@email.com";
        $subject = "New Contact Form Submission";
        $body = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            print "Message sent successfully!";
        }
        } else {
            print "Failed to send message.";
        }

function showPopupForm() {
    document.getElementById("popup-form-container").style.display = "block";
  }
  
  function hidePopupForm() {
    document.getElementById("popup-form-container").style.display = "none";
  }