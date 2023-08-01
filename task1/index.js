const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
