import "./footer.css";
import gpt3Logo from "../../assets/logo.png";

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>jfalei i jlkjlfaieu l asjeiu yoell kjel ie lieuiueo lsieraie</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p> Privacy Policy</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Cretchterwood k12 dk Alkjndjl </p>
          <p> Privacy Policy</p>
          <p>073-038-93y90238</p>
          <p>info@kpaie.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2024 GPT-3. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
