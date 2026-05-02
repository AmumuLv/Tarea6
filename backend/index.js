const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/contactRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// MAGIA AQUÍ: Si Docker manda una URI, la usa. Si no, usa tu localhost.
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/atencionTotalDB';

mongoose.connect(mongoURI)
  .then(() => console.log(`✅ MongoDB conectado exitosamente a: ${mongoURI}`))
  .catch(err => console.error("❌ Error de conexión a Mongo:", err));

app.use('/api/contacts', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor backend corriendo en puerto ${PORT}`));