const express = require('express');
const cors = require('cors');
require('dotenv').config();

const autorRoutes = require('./routes/autorRoutes');
const libroRoutes = require('./routes/libroRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

//asignamos las rutas
app.use('/api/autores', autorRoutes);
app.use('/api/libros', libroRoutes);


app.get('/heath', (req, res) => {
    res.json({ status: 'ok' });
});

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido a mi API' });
}   );


app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

//localhost:3000/api/autores


