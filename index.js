const express = require('express');

const app = express();

app.set('PORT', 5000);
app.use(express.json());
app.use(express.static('public'));

app.get('/home', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html')
});

app.post('/login', (req, res)=>{
    
    const {username, password} = req.body;

    console.log(req.body)

    if(username === 'admin'){
        if(password === 'admin'){
            return res.json({
                msg: 'Sesion iniciada con exito'
            })
        }

        return res.status(400).json({
            msg: 'Contraseña incorrecta'
        })
    }

    return res.status(404).json({
        msg: 'Usuario no encontrado'
    })


})



app.listen(app.get('PORT'), ()=>console.log(`Servidor corriendo en el puerto ${app.get('PORT')}`))
