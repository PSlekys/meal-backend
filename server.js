const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const meals = [
  {
    name: "Šaltibarščiai",
    price: 3,
  },
];

app.get("/", (req, res) => {
  res.send(meals);
});

app.post("/", (req, res) => {
  if (!req.body.name.trim() || !req.body.price) {
    return res.status(400).send({ error: "Incorrect data passed" });
  }

  meals.push({
    name: req.body.name.trim(),
    price: Number(req.body.price),
  });

  res.send({ msg: "Meal added" });
});

const port = 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
