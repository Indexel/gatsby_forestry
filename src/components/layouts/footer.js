import * as React from 'react';
import { Link } from 'gatsby';
import facebook from '../../uploads/facebook.svg';
import twitter from '../../uploads/twitter.svg';
import linkedin from '../../uploads/linkedin.svg';
import youtube from '../../uploads/youtube.svg';
import '../../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="button-container-footer">
          <Link to="" className="button-audit-footer">
            Demander un audit
          </Link>
          <Link to="" className="button-contact-footer">
            Contacter-nous
          </Link>
        </div>
        <div className="sitemap-container-footer">
          <Link to="" className="link-margin-right">
            Expérience utilisateur
          </Link>
          <Link to="" className="link-margin-right">
            Culture green
          </Link>
          <Link to="">Impact écologique</Link>
        </div>
        <div className="socialmedia-footer">
          <Link to="" className="link-margin-right">
            <img src={twitter} alt="twitter" />
          </Link>
          <Link to="" className="link-margin-right">
            <img src={linkedin} alt="linekdin" />
          </Link>
          <Link to="" className="link-margin-right">
            <img src={facebook} alt="facebook" />
          </Link>
          <Link to="">
            <img src={youtube} alt="youtube" />
          </Link>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="politique-footer">
          <Link to="" className="link-margin-right">
            Conditions d'utilisation
          </Link>
          <Link to="" className="link-margin-right">
            Politique de confidentialité
          </Link>
          <Link to="">Politique de sécurité</Link>
        </div>
        <div className="copyright-footer">
          <p>© Copyright Indexel 2022 - Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
