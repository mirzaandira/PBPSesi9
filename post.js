const { response } = require("express");

const postData = {
    nim: '1102030',
    nama: 'Kazuha Nakamura',
    gender: 'P',
    prodi: 'SI',
    alamat: 'Salabintana'
};

fetch(`http://localhost:3000/mahasiswa/`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(postData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));