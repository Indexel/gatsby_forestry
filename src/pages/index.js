import * as React from 'react';
// import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Header from '../components/header';
import Seo from '../components/seo';
import * as styles from '../components/index.module.css';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header></Header>
    <div className={styles.textCenter}>
      <h1>
        Welcome to <b>Indexel!</b>
      </h1>
    </div>
    <ul className={styles.list}></ul>
  </Layout>
);

export default IndexPage;
