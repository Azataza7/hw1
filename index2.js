const express = require('express');
const app = express();
const port = 8080;
const Vigenere = require('caesar-salad').Vigenere;
const PASSWORD = 'passwordWithoutP';

app.get('/encode/:text', (req, res) => {
  const text = req.params.text;
  const encryptedText = Vigenere.Cipher(PASSWORD).crypt(text);
  res.send(`<p>${encryptedText}</p>`);
});

app.get('/decode/:text', (req, res) => {
  const text = req.params.text;
  const decryptedText = Vigenere.Decipher(PASSWORD).crypt(text);
  res.send(`<p>${decryptedText}</p>`);
});

app.listen(port, () => {
  console.log('Server started at ' + port);
})