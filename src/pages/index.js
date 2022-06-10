import * as React from 'react';
// import { Link } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Hero from '../components/sections/hero';
import Chapo from '../components/sections/chapo';
import Table from '../components/sections/table';
import Seo from '../components/layouts/seo';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero></Hero>
    <Chapo></Chapo>
    <Table></Table>
  </Layout>
);

export default IndexPage;
