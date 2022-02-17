const express = require("express");
const { gtaphqlHTTP, graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const app = express();
app.use(cors());

const users = [
  {
    id: 1,
    name: "Petar",
    email: "speedyPetar@gmail.com",
    age: 105,
    avatar:
      "https://www.republika.rs/data/images/2021-02-22/179804_petar_f.jpg",
    activated: false,
  },
  {
    id: 2,
    name: "Stephan",
    email: "blackredStephan@gmail.com",
    age: 120,
    avatar: "https://upload.wikimedia.org/wikipedia/commons/1/19/Razin.jpg",
    activated: true,
  },
  {
    id: 3,
    name: "Girolamo",
    email: "bonfire@gmail.com",
    age: 570,
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Girolamo_Savonarola.jpg/274px-Girolamo_Savonarola.jpg",
    activated: true,
  },
  {
    id: 4,
    name: "Giuseppe",
    email: "risorgimento@gmail.com",
    age: 97,
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Giuseppe_Garibaldi_portrait2.jpg",
    activated: false,
  },
];

const root = {
  getAllUsers: () => {
    return users;
  },
  getUser: ({ id }) => {
    return users.find((user) => {
      user.id === id;
    });
  },
  getActiveUsers: () => {
    return users.filter((user) => user.activated == true);
  },
  createUser: ({ input }) => {
    const user = { ...input, id: Date.now() };
    users.push(user);
    return user;
  },
  updateUser: ({ uid, input }) => {
    let index = users.findIndex((user) => user.id == uid);
    if (index == -1) {
      throw Error("Нет такого пользователя id: " + uid);
    }
    console.log(index);
    users[index] = { ...input, id: uid };
    console.log(users[index]);
    return users[index];
  },
};

app.use(
  "/graphql",
  graphqlHTTP((request) => {
    console.log(request.read());
    return { graphiql: true, schema: schema, rootValue: root };
  })
);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
