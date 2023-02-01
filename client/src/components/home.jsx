import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Postable from "./postable";

const Home = () => {
  const [clicked, setClicked] = useState("btn btn-danger");
  const [id, setId] = useState(Number);
  const [posts, setPosts] = useState([]);

  let po = async () => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(result.data);
  };
  let getById = async () => {
    let result = await axios.get(`http://localhost:4001/api/posts/${id}`);
    setPosts(result.data);
    console.log(posts);
  };

  const savePosts = async () => {
    posts.map(async (post) => {
      await axios.post("http://localhost:4001/api/posts/", post);
    });
    setClicked("btn btn-danger disabled");
  };

  useEffect(() => {
    po();
  }, []);
  return (
    <div>
      <button className={clicked} onClick={savePosts}>
        click me to save all posts
      </button>
      <div>
        <input
          onChange={(e) => setId(e.target.value)}
          required
          className="margen"
          type="number"
          name="username"
        />

        <button onClick={getById} className="send btn btn-info">
          get by userid
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>userId</td>
            <td>Id</td>
            <td>title</td>
            <td>body</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <Postable
                userId={post.userId}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
