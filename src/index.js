const express = require("express");

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get('/message', (req, res) => {
  res.send({ message: "Hello world" });
});

app.listen(3000, () => console.log("Listening on port 3000"));