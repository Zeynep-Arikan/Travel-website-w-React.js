import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Kadınlar Geziyor</h1>
          <p>Unutulmaz seyahitinzde biz sizinleyiz.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>

          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Topluluğumuz</h4>
          <a href="/">Instagram</a>
          <a href="/">Twitter</a>
          
          
        </div>
        <div>
          <h4>Yardım</h4>
          <a href="/">Destek</a>
          <a href="/">SSS</a>
          <a href="/">Bize Ulaşın</a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
