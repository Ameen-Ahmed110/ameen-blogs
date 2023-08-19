import React, { useEffect, useState } from "react";
import Greetings from "./HomeComponents/Greetings";
import Blogs from "./HomeComponents/Blogs";

const MainPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/post');
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }
    fetchPosts();
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Greetings />
      <div className="w-full all-blogs-section flex justify-center items-center">
        <div className="container flex flex-col gap-4 py-4">
          <h3 className="blog-heading text-3xl font-semibold">All Blogs</h3>
          <div className="blogs w-3/4">
            {posts.map((post, index) => (
              <Blogs
                key={index}
                imgURL={post.imgURL}
                blogTitle={post.blogtitle}
                author={post.author}
                blogContent={post.blogContent}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
