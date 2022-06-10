import { Link } from 'gatsby';
import * as React from 'react';
import '../../assets/css/chapo.css';

const Chapo = () => {
  return (
    <section className="section-chapo">
      <div className="container-chapo">
        <p className="text-chapo">
          <span>En moins de trois semaines,</span> nous réalisons pour vous
          l’audit de votre site et vous livrons nos recommandations pour que
          celui-ci devienne le plus durable et le plus “green” possible.
          Découvrez l’offre
        </p>
        <Link to="" className="link-chapo">
          Découvrez l'offre
        </Link>
      </div>
    </section>
  );
};

export default Chapo;
