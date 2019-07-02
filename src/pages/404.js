import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <section id="one" className="main">
      <div className="container">
        <div className="content">
          <header className="major">
            <h2>hmmm...how did you get here?</h2>
          </header>
          <section>
            <h4>that was not a valid URL. Please hang up and dial again!</h4>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
