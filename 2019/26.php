<?php
    include_once('game.php');

    if (isset($_POST['position']))
        play($_POST['id'], $_POST['position']);
    
    echo json_encode(state($_POST['id']));
?>