<?php


$req = "SELECT * FROM crud";

$result = $con->query($req);
//$data = $result->fetch();
$users = array();
while ($data = $result->fetch()) {
    $user = array();
    $user['id'] = $data['id'];
    $user['nom'] = $data['nom'];
    $user['tel'] = $data['tel'];
    $user['pass'] = $data['pass'];
   

    array_push($users, $user);
    // var_dump($books);
}
$result->closeCursor();

$json_result = json_encode($users);
echo $json_result;