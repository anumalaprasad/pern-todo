const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

// create a todo

app.post("/airdrops", async (req, res) => {
  try {
    const { userAddress, referralAddress } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO airdrop (userAddress, referralAddress) VALUES($1, $2) RETURNING *",
      [userAddress, referralAddress]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos

// app.get("/todos", async (req, res) => {
//   try {
//     const allTodos = await pool.query("SELECT * FROM todo");
//     res.json(allTodos.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

//get a todo

app.get("/airdrops/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    // const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
    //   id
    // ]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
 

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
