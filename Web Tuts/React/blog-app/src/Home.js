import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState()

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
      console.log("Use effectRun!!!");
  }, [])

  return (
    <div className="home">
        <BlogList blogs={blogs} title="All Blogs!!" handleDelete={handleDelete} />
    </div>
  );
}
 
export default Home;