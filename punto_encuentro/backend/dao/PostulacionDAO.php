<?php

// Importa la conexión a la base de datos
require_once __DIR__ . '/../config/database.php';

function getPostulaciones() {

    $conn = conectar();

    $stmt = $conn->prepare("SELECT * from postulaciones");

    $stmt->execute();
}

function deletePostulaciones($id) {

    $conn = conectar();

    $stmt = $conn->prepare("DELETE from postulaciones where id = ?");

    $stmt->bind_param("i", id);

    $stmt->execute();
}

function estadoPostulacion($id, $estado) {
 
    $conn = conectar();

    $stmt = $conn->prepare("UPDATE postulaciones SET estado = ? where id = ?");

    $stmt->bind_param("ib", id, estado);

    $stmt->execute();
}