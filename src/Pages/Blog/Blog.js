import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
  return (
    <div className='container row mx-auto' >
      <div className="col-12 col-md-8 mx-auto">
        <h2>QNA</h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
            <Accordion.Body>
              authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
            <Accordion.Body>
              Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.

              Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
            <Accordion.Body>
              The core features of Firebase include NoSQL databases, real-time queries, scalable hosting, file storage, REST APIs, authentication, and analytics.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Blog;