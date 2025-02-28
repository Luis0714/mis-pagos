const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Comprobantes de Pago');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
