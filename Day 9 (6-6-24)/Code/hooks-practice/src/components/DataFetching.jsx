import React from "react";
import axios from "axios";

const DataFetching = () => {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li></li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
