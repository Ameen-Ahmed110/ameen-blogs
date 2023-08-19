import React, { useEffect, useState } from "react";
import Blogs from "../Home/HomeComponents/Blogs";

const profile = () => {
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
      <div className="container py-8">
        <h2 className="greetings text-5xl font-bold text-black">
          Back to all blogs
        </h2>
      </div>
      <div className="w-full all-blogs-section flex justify-center items-center">
        <div className="container flex gap-8 py-4">
          <div className="blogs w-3/4 flex flex-col gap-3">
            <h3 className="blog-heading text-3xl font-semibold">All Blogs</h3>
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
          <div className="w-1/4 flex flex-col gap-1 items-end">
            <p className="author-email text-xl font-semibold decoration-1">
              elon@openai.com
            </p>
            <h3 className="user-name">Elon Musk</h3>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
              className="user_image"
              alt="Ellon Musk"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
