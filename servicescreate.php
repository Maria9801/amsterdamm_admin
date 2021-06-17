 <?php

    require_once("../php/db.php");

    //запускаем сессию, чтобы хранить данные о пользователе между страницами


    // подготовленный запрос
    $sql = "INSERT INTO services (name, price) VALUES (:name, :price)";

    // отправляем в бд
    $query = $db->prepare($sql);

    // связывает параметр
    $query->bindValue(':name', $_POST['name']);
    $query->bindValue(':price', $_POST['price']);


    // отправляет запрос
    $query->execute();
?>

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Добавление услуги</title>
</head>
<body>
    <form action="" method="POST">
        <input type="text" name="name" placeholder="Название услуги">
        <input type="text" name="price" placeholder="Стоимость">
        <button type="submit">Отправить</button>
    </form>
</body>
</html>



