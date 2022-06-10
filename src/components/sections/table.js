import * as React from 'react';
import { Link } from 'gatsby';
import '../../assets/css/table.css';

const Table = () => {
  return (
    <section className="section-table">
      <div className="container-table">
        <h2 className="title-table">
          Un site web éco-conçu, pourquoi et comment ?
        </h2>
        <div className="content-table">
          <div className="content-update-table">
            <p>Les avantages utilisateurs</p>
            <p>Les avantages marketing</p>
            <p>Les avantages pour notre planète</p>
          </div>
          <div className="content-text-table">
            <h3>L’UI / UX la plus poussée possible</h3>
            <p>
              Un site éco-conçu est un site beaucoup plus simple, à la fois dans
              son architecture et son interface, ce qui facilite grandement la
              navigation des utilisateurs et réduit le temps nécessaire donné à
              la recherche d’une information.
            </p>
            <h3>Une rapidité d’affichage optimale</h3>
            <p>
              De plus en plus, vos utilisateurs consultent votre site depuis
              leurs smartphones.Adressez-vous à ces cibles avec un temps
              d’affichage optimal.
            </p>
            <Link to="">En savoir plus</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
