const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

// body-parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reto que hace helmet y cors
app.use(helmet()); // Basic configuration
app.use(cors()) // Basic configuration for enable CORS


//rutas
app.use('/api', require('./routes'));


// Servidor
app.listen(3001, () => {
    console.log(`Express on port 3001`);
  });

 // Reto  Crear mis rutas con mis models y mi configuracion de db de User , Orders

// Ultimpo Reto del Modulo  
// Crear la conexion con Base Mariadb (Investigar, Lograr ) y Back y generar Pruebas  (Investigar, Lograr ) 
// las pruebas seran con Postaman 

// Entrega de su proyecto con las estructura que logramoas hasta ahora 

