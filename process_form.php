<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    echo "<h1>Terima kasih atas pesanmu, $name!</h1>";
    echo "<p>Kami telah menerima pesanmu dan akan menghubungimu di $email.</p>";
    echo "<p>Pesan: $message</p>";
}
?>
