const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");
const { createPost } = require("./handlers/createPost");
const { deletePost } = require("./handlers/deletePost");
const { getPosts } = require("./handlers/getPosts");
const { getSortedUsers } = require("./handlers/getSortedUsers");
const { getUser } = require("./handlers/getUser");
const { getUserPosts } = require("./handlers/getUserPosts");
const { getUsers } = require("./handlers/getUsers");
const { updateProfilePic } = require("./handlers/updateProfilePic");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.use(helmet());

app.use(morgan("tiny"));

app.get("/api/get-user/:userEmail", getUser);

app.get("/api/get-users", getUsers);

app.get("/api/get-user-posts/:email", getUserPosts);

app.get("/api/get-posts", getPosts);

app.get("/api/get-sorted-users/:sortedBy", getSortedUsers);

app.post("/api/create-post", createPost);

app.delete("/api/delete-post", deletePost);

app.patch("/api/update-profile-pic", updateProfilePic);

app.listen(8000, () => {
  console.log(`Example app listening on port 8000`);
});
