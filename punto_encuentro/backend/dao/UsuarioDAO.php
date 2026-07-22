<?php

require_once __DIR__ . '/../config/database.php';

function addUsuario($nombre, $email, $telefono, $password, $estado_academico, $admin) {

    $conn = conectar();

    $stmt = $conn->prepare("SELECT * from usuario where email = ?");

    $stmt->bind_param("s", $email);

    $stmt->execute();

    $resultado = $stmt->get_result();

    if ($fila = $resultado->fetch_assoc()) {
        return false; // El usuario ya existe
    } else {
        $stmt = $conn->prepare("INSERT into usuario 
        (nombre, email, telefono, password, estado_academico, admin) 
        values (?, ?, ?, ?, ?, ?)");

        $stmt->bind_param("sssssi", $nombre, $email, $telefono, $password, $estado_academico, $admin);

        return $stmt->execute();

    }
}

function login($email, $password) {

    $conn = conectar();

    $stmt = $conn->prepare("SELECT * from usuario where email = ?");

    $stmt->bind_param("s", $email);

    $stmt->execute();

    $resultado = $stmt->get_result();

    if ($fila = $resultado->fetch_assoc()) {
    
        if (password_verify($password, $fila['password'])) {
            return json_encode(['success' => true, 'nombre' => $fila['nombre']]);
        } else {
            return json_encode(['success' => false]);
        }
        
    } else {
        return json_encode(['success' => false]);
    }

    return $stmt->execute();
}