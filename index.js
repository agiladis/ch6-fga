require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes/user.route');
const PORT = process.env.PORT || 3000;

app.use('/images', express.static('public/images'));
app.use('/files', express.static('public/files'));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`live at localhost:${PORT}`);
});
