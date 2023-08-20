import React, { useState, useEffect } from "react";
import Blogs from "../Home/HomeComponents/Blogs";

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/post");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          blogTitle,
          blogContent,
        }),
      });

      if (response.ok) {
        setEmail("");
        setBlogTitle("");
        setBlogContent("");
        fetchPosts(); // Fetch updated posts
      } else {
        console.error("Error submitting blog post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="container py-8">
        <h2 className="greetings text-4xl font-bold ml-4  text-black">Dashboard</h2>
      </div>
      <div className="w-full all-blogs-section flex flex-col justify-center items-center">
        <div className="blog-posting container flex  py-6">
          <div className="post-blog w-3/4 bg-white border-2 border-gray-200 p-12 rounded-xl">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="w-full border rounded p-2 mb-4"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="w-full border rounded p-2 mb-4"
                placeholder="ADD Blog Title"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
              />
              <textarea
                className="w-full border rounded p-2 mb-4"
                rows="4"
                placeholder="Write Your Blog Content"
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white rounded-full text-1xl font-semibold px-4 py-2 "
                style={{ backgroundColor: "#4285F4" }}
              >
                Add Your Blog
              </button>
            </form>
          </div>
        </div>
        <div className="container flex gap-8 py-4">
          <div className="blogs w-3/4 flex flex-col gap-3">
            <h3 className="text-4xl py-4 font-semibold ml-5">My Blogs</h3>
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

export default Dashboard;
