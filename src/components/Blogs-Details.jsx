import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import DOMPurify from "dompurify";
import ClipLoader from "react-spinners/ClipLoader";

const BlogsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          "https://rootletsolutions.com/rootlet-admin/fetch_data.php"
        );
        const allPosts = response.data.data;

        const currentPost = allPosts.find((item) => item.id === id);
        setPost(currentPost);

        const filteredPosts = allPosts.filter((item) => item.id !== id);
        setPosts(filteredPosts);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handlePreviousClick = () => {
    const previousId = (parseInt(id) - 1).toString();
    if (previousId > 0) {
      navigate(`/blogsdetails/${previousId}`);
    } else {
      alert("This is the first post.");
    }
  };

  const handleNextClick = () => {
    const nextId = (parseInt(id) + 1).toString();
    const nextPost = posts.find((post) => post.id === nextId);
    if (nextPost) {
      navigate(`/blogsdetails/${nextId}`);
    } else {
      alert("This is the last post.");
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="container Blog"
      >
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

  const shareUrl = `http://localhost:5173/blogsdetails/${id}`;
  const title = post ? post.title : "";

  const highlightText = (text, term) => {
    if (!term.trim()) return text;
    const regex = new RegExp(`(${term})`, "gi");
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };
  const sanitizedContent = DOMPurify.sanitize(post.content, {
    USE_PROFILES: { html: false },
  });
  return (
    <div style={{ marginTop: "15vh" }} className="container Blogsdetails">
      <div className="row">
        <div className="col-lg-8">
          <div>
            {post && (
              <div>
                <h1 className="text-center">{post.title}</h1>
                <p className="text-center">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
                <div className="img">
                  <img
                    width="100%"
                    src={`https://rootletsolutions.com/rootlet-admin/${post.img}`}
                    alt={post.title}
                  />
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.content),
                  }}
                ></div>
                <p>{new Date(post.created_at).toLocaleDateString()}</p>
              </div>
            )}
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center mb-3">
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onClick={handlePreviousClick}
            >
              <u>Previous Post</u>
            </button>
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onClick={handleNextClick}
            >
              <u>Next Post</u>
            </button>
          </div>
          <div className="d-flex align-items-center share mb-3">
            <h4 className="mr-2">Share the Post:</h4>
            <FacebookShareButton url={shareUrl} quote={title}>
              <i
                className="fab fa-facebook-square fa-2x"
                style={{
                  color: "#3b5998",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              ></i>
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={title}>
              <i
                className="fab fa-twitter-square fa-2x"
                style={{
                  color: "#1da1f2",
                  cursor: "pointer",
                  marginRight: "10px",
                }}
              ></i>
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} title={title}>
              <i
                className="fab fa-linkedin fa-2x"
                style={{ color: "#0077b5", cursor: "pointer" }}
              ></i>
            </LinkedinShareButton>
          </div>
          <div className="container container2">
            <div className="row">
              <h1 className="text-center">Related Posts</h1>
              {filteredPosts.slice(0, 2).map((post) => (
                <div
                  style={{
                    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.164)",
                    height: "100%",
                  }}
                  className="col-lg-3"
                  key={post.id}
                  data-aos="fade-up"
                >
                  <Link to={`/blogsdetails/${post.id}`}>
                    <img
                      width="100%"
                      src={`https://rootletsolutions.com/rootlet-admin/${post.img}`}
                      alt={post.title}
                    />
                  </Link>
                  <div>
                    <Link to={`/blogsdetails/${post.id}`}>
                      <h3>
                        {post.title.length > 40
                          ? `${post.title.substring(0, 40)}...`
                          : post.title}
                      </h3>
                    </Link>
                    <p
                      style={{ padding: "0vh 0.5vw" }}
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          highlightText(
                            post.content.substring(0, 100),
                            searchTerm
                          )
                        ),
                      }}
                    />
                    <Link to={`/blogsdetails/${post.id}`}>
                      <p style={{ color: "#1910EC" }}>read more</p>
                    </Link>
                    <div>
                      <p style={{ padding: "0vh 0.5vw" }}>
                        {new Date(post.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="search-container" data-aos="fade-up">
            <input
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div>
            <h1>Recent Posts</h1>
            {filteredPosts.slice(0, 3).map((post) => (
              <div key={post.id} style={{ marginBottom: "20px" }}>
                <h4 data-aos="fade-up">
                  {post.title.length > 60
                    ? `${post.title.substring(0, 60)}...`
                    : post.title}
                </h4>
                <Link to={`/blogsdetails/${post.id}`}>
                  <h3 data-aos="fade-up">
                    {sanitizedContent.length > 60
                      ? `${sanitizedContent.substring(0, 60)}...`
                      : sanitizedContent}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
