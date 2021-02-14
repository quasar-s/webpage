<?php
    $host = 'localhost';
    $user = 'root';
    $pw = '85976427d';
    $dbName = 'nodedb';
    $mysqli = new mysqli($host, $user, $pw, $dbName);

    if($mysqli){
        echo "MySQL 접속 성공";
    }else{
        echo "MySQL 접속 실패";
    }
?>
