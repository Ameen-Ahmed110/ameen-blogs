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
        <h2 className="greetings text-5xl font-bold text-sky-400 ">
         ! Back to all blogs
        </h2>
      </div>
      <div className="w-full all-blogs-section flex justify-center items-center">
        <div className="container flex gap-8 py-4">
          <div className="blogs w-3/5 flex flex-col gap-3">
            <h3 className="blog-heading text-3xl font-semibold ml-5 py-4 ">Every Blog</h3>
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
            <h3 className="user-name">Imran khan</h3>
            <img
              src="https://images.unsplash.com/photo-1600812227435-d194ea36937d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              className="user_image "
              alt="bilgades"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default profile;
