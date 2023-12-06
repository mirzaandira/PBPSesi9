const { error } = require("console");
const { response } = require("express");


const mahasiswaNIM = "1102020";
const updateData = {};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNIM}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("error : ", err));