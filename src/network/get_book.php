<?php
try {
    $con = new PDO('mysql:host=localhost;dbname=recyclerview', 'root', '');
} catch (Exception $e) {
    echo die("Erreur" . $e->getMessage());
}

$req = "SELECT * FROM book";

$result = $con->query($req);
//$data = $result->fetch();
$books = array();
while ($data = $result->fetch()) {
    $book = array();
    $book['id'] = $data['id'];
    $book['title'] = $data['title'];
    $book['sumury'] = $data['sumury'];
    $book['image'] = $data['image'];
    $book['author'] = $data['author'];
    $book['rating'] = $data['rating'];

    array_push($books, $book);
    // var_dump($books);
}
$result->closeCursor();

$json_result = json_encode($books);
echo $json_result;
