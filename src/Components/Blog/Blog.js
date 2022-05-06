import React from 'react';
import { Accordion } from 'react-bootstrap';
// import PageTitle from '../PageTitle/PageTitle';

const Blog = () => {
    return (
      <div id='Faq' className='container w-50 m-auto mt-5 mb-5 shadow-lg pt-2 pb-5  ' style={{borderRadius:"20px"}}>
            {/* <PageTitle helmet='blog'></PageTitle> */}
          <h2 className='text-center m-5 text-warning '>Frequently asked Questions</h2>
            <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Authorization vs Authencation?</Accordion.Header>
          <Accordion.Body>
              *** Authorezation<br></br>
            1.Authorization determines what resources a user can access.
            2.Authorization works through settings that are implemented and maintained by the organization.
            3.Authorization always takes place after authentication.
            <hr />
            *** Authencation<br></br>
            1.Authentication verifies who the user is.
            2.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
            3.Authentication is the first step of a good identity and access management process.


          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
          <Accordion.Body>
          Firebase helps you build and run successful apps. Backed by Google, loved by developers. Accelerate app development with fully managed backend infrastructure.
          Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
          <Accordion.Body>
          There are many services which Firebase provides, Most useful of them are<br></br>

              1.Cloud Firestore..
              2.Authentication
              3.Hosting.
              4.Cloud Storage
              4.Google Analytics.
             
            
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      </div>
    );
};

export default Blog;