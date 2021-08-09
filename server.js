const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let meals = [];

app.get("/", (req, res) => {
  res.send(meals);
});

app.post("/", (req, res) => {
  if (!req.body.name.trim() || !req.body.price) {
    return res.status(400).send({ error: "Incorrect data passed" });
  }

  meals.push({
    id: Math.floor(Math.random() * 100000),
    name: req.body.name.trim(),
    price: Number(req.body.price),
  });

  res.send({ msg: "Meal added" });
});

app.delete("/:id", (req, res) => {
  meals = meals.filter((x) => x.id !== Number(req.params.id));
  res.send({ msg: "Meal deleted" });
});

const port = 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));
