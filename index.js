const app = require('express')();

const PUERTO = 4000;

app.listen(
    PUERTO, 
    () => console.log(`El servidor esta corriendo en ${PUERTO}`)
);

app.post('/metodoPost', (req,res)=>{
    res.send("Nombre: Luis Gerardo Alvarado Moreno \n Matricula: 20963 \n Grupo: 5A")
});