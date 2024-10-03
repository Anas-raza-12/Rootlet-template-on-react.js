import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const SEO = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a delay for data fetching
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setError(null);
      } catch (error) {
        setError("An error occurred while fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "red" }}>{error}</p>
      </div>
    );
  }

  return (
    <div style={{ marginTop: "13vh " }} className="container-fluid p-0 SEO">
      <img width={"100%"} src="/src/assets/image/seo.PNG" alt="" />
      <div className="container">
        <h1 data-aos="fade-up" className="text-center">
          SEARCH ENGINE OPTIMIZATION (SEO)
        </h1>
        <h3 data-aos="fade-up" className="text-center">
          Welcome to Rootlet Solutions SEO Services: Level-Up Your Online
          Presence With Effective SEO Service In The USA
        </h3>
        <p className="text-center" data-aos="fade-up">
          Discover the limitless possibilities for your online presence with
          Rootlet Solutions, your trusted partner for state-of-the-art SEO
          services. In a digital realm where visibility reigns supreme, our team
          of experts utilizes strategic and innovative methods to elevate your
          website to the pinnacle of search engine rankings. Explore our
          comprehensive range of SEO services and embark on the journey to
          establish your industry dominance in the online world.
        </p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">Why SEO Matters</h1>
              <p data-aos="fade-up">
                In a digitally driven world, SEO (Search Engine Optimization)
                plays a pivotal role in making your business stand out amidst
                the virtual noise. Learn about the unmatched benefits of SEO and
                why it is an indispensable component of any successful online
                strategy.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="/src/assets/image/seo1.png" alt="" data-aos="fade-down" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="/src/assets/image/seo2.png" alt="" data-aos="fade-down" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">Keyword Research</h1>
              <p data-aos="fade-up">
                Identifying the appropriate keywords is crucial for successful
                SEO. At Rootlet Solutions, we conduct comprehensive keyword
                research to precisely identify the terms and phrases that will
                optimize your visibility and attract the most relevant audience
                to your website.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">On-Page and Off-Page Optimization</h1>
              <p data-aos="fade-up">
                Rootlet Solutions offers comprehensive optimization services to
                ensure your website excels in both on-page and off-page aspects,
                maximizing its visibility and relevance on search engines. Our
                expertise lies in refining on-page elements such as Meta tags,
                headings, and content, aligning them with SEO best practices to
                boost your site's relevance. But we don't stop there. We
                understand the importance of extending your online presence
                beyond your website. That's why, at Rootlet Solutions, we
                leverage off-page optimization techniques like link-building and
                social signals to enhance your website's authority and elevate
                its ranking in search results. With our tailored approach
                encompassing both on-page and off-page strategies, we ensure
                that every aspect of your online presence is optimized for
                maximum impact.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="/src/assets/image/seo3.png" alt="" data-aos="fade-down" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="/src/assets/image/seo4.png" alt="" data-aos="fade-down" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">Content Strategy</h1>
              <p data-aos="fade-up">
                Content reigns supreme, and at Rootlet Solutions, we've mastered
                the art of leveraging it for SEO success. Our team crafts a
                laser-focused content strategy that not only captivates your
                audience but also harmonizes with search engine algorithms,
                fueling organic traffic and fostering meaningful engagement. Get
                ready to conquer the digital realm!
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <h1 data-aos="fade-up">Let's Achieve SEO Success Together</h1>
              <p data-aos="fade-up">
                Collaborate with Rootlet Solutions for SEO success that
                surpasses mere rankings. Our dedicated team is poised to work
                alongside you, delivering heightened visibility, organic
                traffic, and conversions that drive your business to new
                heights. Take advantage of our expertise, proven strategies, and
                commitment to excellence in SEO.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src="/src/assets/image/seo5.png" alt="" data-aos="fade-down" />
          </div>
        </div>
      </div>
      <div className="cta container-3 container-fluid p-0 m-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 ">
              <h2 data-aos="fade-up">Let's Get in Touch</h2>
              <h1 data-aos="fade-up">
                LET'S TALK ABOUT YOUR BUSINESS IT SERVICES NEEDS
              </h1>
              <p data-aos="fade-up">Feel free to reach out to us.</p>
            </div>
            <div className="col-lg-6 col-md-5">
              <button data-aos="fade-right">
                <Link to="/Contact">
                  GET IN TOUCH <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEO;
