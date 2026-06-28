import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web Developer</h4>
                <h5>Self Employed</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Started freelancing and building websites for clients across India
              and internationally. Focused on creating modern, high-performance
              web experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>15+ Indian Clients</h4>
                <h5>Freelance Projects</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Delivered 15+ websites to Indian clients ranging from personal
              portfolios to business landing pages and e-commerce platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>20+ International Clients</h4>
                <h5>Global Freelance</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Expanded globally with 20+ international clients. Building
              pixel-perfect, animated, and interactive websites with modern tech
              stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
