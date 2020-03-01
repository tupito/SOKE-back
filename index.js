const express = require('express')
const data = require('./testdata')
const app = express()

// Prevent error: "Access to XMLHttpRequest at 'http://localhost:3000/soke' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource."
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/soke', (req, res, next) => {
  res.json(data)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`))