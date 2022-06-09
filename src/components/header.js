import * as React from 'react';
import { graphql, Link } from 'gatsby';

const Header = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { frontmatter } = allMarkdownRemark;
  return (
    <header>
      <h1>{frontmatter.nav_bar_first_link}</h1>
      {/* <Link to="/">{navBar.frontmatter.nav_bar_first_link}</Link>
      <h1>{navBar.frontmatter.nav_bar_first_link}</h1> */}
    </header>
  );
};

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(
      sort: { fields: frontmatter___logo_nav_bar___id, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            nav_bar_first_link
            nav_bar_second_link
            nav_bar_third_link
            nav_bar_contact_link
          }
        }
      }
    }
  }
`;

export default Header;
