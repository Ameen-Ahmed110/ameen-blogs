import Link from "next/link";
import React from "react";

const Blogs = (props) => {
  return (
    <div className="bg-white home-blogs mb-4">
      <div className="flex flex-col gap-4">
        <div className="author-info flex gap-3">
          <img
            src={props.imgURL}
            alt="Elon Musk"
            className="blog-author-image"
          />
          <div className="author-info flex flex-col gap-2 justify-end">
            <h4 className="blog-title">{props.blogTitle}</h4>
            <h2 className="author-name">{props.author}</h2>
          </div>
        </div>
        <p className="blog-para text-base font-normal text-gray-600">
          {props.blogContent}
        </p>
        <Link
          className="text-base font-normal blog-user-btn"
          href="/userprofile/profile"
        >
          see all from this user
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
