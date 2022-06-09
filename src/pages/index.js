import * as React from 'react';
// import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Header from '../components/header';
import Hero from '../components/section/hero';
import Chapo from '../components/section/chapo';
import Table from '../components/section/table';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Header></Header>
    <Hero></Hero>
    <Chapo></Chapo>
    <Table></Table>
  </Layout>
);

export default IndexPage;
