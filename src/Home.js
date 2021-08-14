import BlogList from "./BlogList";
import useFetch from "./useFetch";
function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="home">
      <h2>All blogs</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading</div>}
      {blogs &&
        blogs.map((blog) => (
          <BlogList
            title={blog.title}
            author={blog.author}
            key={blog.id}
            id={blog.id}
          />
        ))}
    </div>
  );
}

export default Home;
