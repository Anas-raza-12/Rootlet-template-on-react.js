import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import debounce from "lodash.debounce";
import DOMPurify from "dompurify";
import ClipLoader from "react-spinners/ClipLoader";

const useDebounce = (func, delay) => {
  const debouncedFunc = useCallback(debounce(func, delay), [func, delay]);
  return debouncedFunc;
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://rootletsolutions.com/rootlet-admin/fetch_data.php"
        );
        const data =
          response.data.status === "success" ? response.data.data : [];
        setPosts(data);
        setFilteredPosts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    debouncedFilterPosts(value);
  };

  const debouncedFilterPosts = useDebounce((value) => {
    try {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(value) ||
          post.content.toLowerCase().includes(value)
      );
      setFilteredPosts(filtered);
    } catch (error) {
      console.error("Error filtering posts:", error);
      setFilteredPosts([]);
    }
  }, 300);

  const highlightText = (text, highlight) => {
    if (!highlight.trim()) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        part
      )
    );
  };

  if (loading) {
    return (
      <div style={{height:'100vh', justifyContent:'center',alignItems:'center'}} className="container Blog  d-flex">
        <ClipLoader
          color="#000000" 
          loading={loading}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  if (error) {
    return <div className="container Blog">Error: {error.message}</div>;
  }

  return (
    <div className="container Blog">
      <h1>
        OUR <span>BLOGS & NEWS</span>
      </h1>
      <div className="row">
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="search"
            placeholder="Searching..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <i className="fa-solid fa-magnifying-glass icon"></i>
        </div>
        {filteredPosts.length === 0 ? (
          <p>No results found for "{searchTerm}".</p>
        ) : (
          filteredPosts.map((post) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 blog-post"
              key={post.id}
              data-aos="fade-up"
              style={{
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.164)",
                height: "100%",
                marginBottom: "20px",
              }}
            >
              <Link to={`/blogsdetails/${post.id}`}>
                <img
                  width="100%"
                  src={`https://rootletsolutions.com/rootlet-admin/${post.img}`}
                  alt={post.title}
                />
              </Link>

              <Link to={`/blogsdetails/${post.id}`}>
                <h3>
                  {highlightText(post.title.substring(0, 50), searchTerm)}
                  {post.title.length > 50 ? " ..." : ""}
                </h3>
              </Link>
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    highlightText(
                      post.content.substring(0, 100) +
                        (post.content.length > 100 ? "..." : ""),
                      searchTerm
                    )
                  ),
                }}
              />

              <Link to={`/blogsdetails/${post.id}`}>
                <p style={{ color: "#1910EC" }}>read more</p>
              </Link>
              <div>
                <p>{new Date(post.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Blog;
