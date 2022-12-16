import "./FooterJsa.css";
import linkedin from "./icons/linkedin.svg";
import git from "./icons/square-github.svg";

const FooterJsa = () => {
  return (
    <footer className="footer-jsa">
      <div className="container-icons-footerjsa">
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/nzzareno/"
          target="_blank"
        >
          <img src={linkedin} alt="My Happy SVG" width="20px" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://github.com/nzzareno"
          target="_blank"
        >
          <img src={git} alt="My Happy SVG" width="20px" />
        </a>
      </div>
    </footer>
  );
};

export { FooterJsa };
