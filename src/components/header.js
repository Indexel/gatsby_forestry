import * as React from 'react';
import { graphql, Link } from 'gatsby';
import logo from '../uploads/logo_indexel.webp';

const Header = ({ data }) => {
  // const { allMarkdownRemark } = data;
  // const { frontmatter } = allMarkdownRemark;
  return (
    <header className="header-nav">
      <figure className="figure-nav">
        <img className="img-nav" src={logo} />
      </figure>
      <div className="links-nav">
        <Link to="">Expérience utilisateur</Link>
        <Link to="">Culture green</Link>
        <Link to="">Impact écologique</Link>
        <Link to="">Contactez-nous</Link>
      </div>
    </header>
  );
};

// export const query = graphql`
//   query MyQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             nav_bar_first_link
//             nav_bar_second_link
//             nav_bar_third_link
//             nav_bar_contact_link
//           }
//         }
//       }
//     }
//   }
// `;

export default Header;
