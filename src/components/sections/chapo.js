import { Link } from 'gatsby';
import * as React from 'react';

const Chapo = ({ data }) => {
  return (
    <section className="section-chapo">
      <div className="container-chapo">
        <p className="text-chapo">
          En moins de trois semaines, nous réalisons pour vous l’audit de votre
          site et vous livrons nos recommandations pour que celui-ci devienne le
          plus durable et le plus “green” possible. Découvrez l’offre
        </p>
        <Link to="">Découvrez l'offre</Link>
      </div>
    </section>
  );
};

export default Chapo;
