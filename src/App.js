import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar } from '@material-ui/core'
import NavBar from './components/navbar/NavBar';
import InfoSection from './components/infosection/InfoSection';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="BackgroundImage">
      </div>
      
      <header className="App-header">
        <InfoSection sectionName="About Me">
          <p>
          Hi There,
          </p>
          
          <p>
          I'm Joseph Varilla, a full stack developer and an IT (Web Development) student at DePaul University
          in Chicago. I have experience working with all parts of the stack (front-end, back-end, dbs) through
          varying roles. I've worked as free-lance graphic designer, a coding instructor, testing and evaluating
          programming/database projects, and as a software engineer intern.
          </p>

          <p>
          My programming journey started at the age of eight, when I taught myself how to use GameMaker Studio
          to create computer games because my parents wouldn't buy me video games. Since then, I've worked on
          everything from websites to robots, digital badge systems to asset managagment systems, and IoT to
          BlockChain.
          </p>

          <p>
          I'm a firm believer that there is always a better way to do everything. That is why I love working
          with technology specifically, because we get to make tools that make people's lives a little better.
           I don't like backing down from a challenge, and when presented with opportunities for work, I opt for
          the most challenging option. I love learning new things as much as I love sharing what I've learned.
          </p>

          <p>
          Outside of programming, I like to keep up with current events and browse through my Quora feed. I always
          want to be in the know about what is right-around the corner in local news/developments and enjoy picking
          up useful but little-known information.
          </p>

        </InfoSection>
        <InfoSection sectionName="Experience">
          <h3>Software Engineer Intern</h3>
          <h4>Robert Bosch LLC | Mount Prospect, IL</h4>
          <h5>Jun 2019 - Aug 2019 (3 Months)</h5>
          <ul>
            <li>Developed the Audit Trail and Reporting microservices for 
            an asset management platform for large-scale construction companies 
            using Kotlin, Vert.x, Koin.io, MongoDB, and Kafka</li>
            <li>Wrote automated unit tests using JUnit and Mock.io, integration tests with Postman,
             and data generation scripts with Node.js</li>
            <li>Improved the CI/CD process by working with CodeFresh.io, 
                Docker, Kubernetes, Helm, and Azure
            </li>
          </ul>

          <h3>Student Employee</h3>
          <h4>DePaul University | Chicago, IL</h4>
          <h5>Mar 2019 - Present (8 Months)</h5>
          <ul>
            <li>Debugged and tested Java programs</li>
            <li>Worked with SQL projects and Entity Relationship Diagrams (ERD)</li>
          </ul>

          <h3>Coding Instructor</h3>
          <h4>Code Play Learn Inc | Oak Park, IL</h4>
          <h5>Sep 2017 - Feb 2019 (1 year 5 months)</h5>
          <ul>
            <li>Taught programming concepts using Java and Block-Based Coding Platforms, 
                to K-12 students </li>
            <li>Created new programming projects and lessons to illustrate concepts</li>
            <li>Provided support for installing and troubleshooting 3rd party software</li>
          </ul>
        </InfoSection>
        <InfoSection sectionName="Projects">
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </InfoSection>
        <InfoSection sectionName="Skills">
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </InfoSection>
        <InfoSection sectionName="Education">
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </InfoSection>
      </header>
      </div>
     
  );
}

export default App;
