<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se os campos foram preenchidos
    if(isset($_POST["email"]) && isset($_POST["mensagem"])){
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        $mensagem = filter_var($_POST["mensagem"], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
        
        // Envia o e-mail
        $assunto = "Nova mensagem do formulário de contato";
        $mensagem_final = "E-mail do remetente: $email\n\nMensagem:\n$mensagem";
        $headers = "From: $email";
        
        // Substitua "seu_email@example.com" pelo seu endereço de e-mail
        $destinatario = "pedrosiqueirapb@gmail.com";
        
        // Envia o e-mail
        mail($destinatario, $assunto, $mensagem_final, $headers);
        
        exit();
    } else {
        echo "Por favor, preencha todos os campos do formulário.";
    }
}
?>
