import { Link } from 'gatsby';
import * as React from 'react';

const Table = ({ data }) => {
  return (
    <section className="section-table">
      <div className="container-table">
        <h2 className="title-table"></h2>
        <div className="content-update-table">
          <p>Les avantages utilisateurs</p>
          <p>Les avantages marketing</p>
          <p>Les avantages pour notre planète</p>
        </div>
        <div className="content-text-table">
          <p>L’UI / UX la plus poussée possible</p>
          <p>
            Un site éco-conçu est un site beaucoup plus simple, à la fois dans
            son architecture et son interface, ce qui facilite grandement la
            navigation des utilisateurs et réduit le temps nécessaire donné à la
            recherche d’une information.
          </p>
          <p>Une rapidité d’affichage optimale</p>
          <p>
            De plus en plus, vos utilisateurs consultent votre site depuis leurs
            smartphones.Adressez-vous à ces cibles avec un temps d’affichage
            optimal.
          </p>
        </div>
        <Link to="">En savoir plus</Link>
      </div>
    </section>
  );
};

export default Table;
