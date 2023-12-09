import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SectionName from './SectionName.js';
import Home from "./Home.js"

const projects = `
Flask App - Lead developer/designer/team lead on a productivity 
app implemented in Python. - Schwab

CCIS - Contributed significantly to a tool for 
automating call center configurations. - Schwab

CCM Dashboard - Contributed to the implementation 
of features and bug fixes. - Schwab

Interaction Reporting Database - Wrote code that 
updated database records 
and processes within TOAD for Oracle. - Schwab

Java file uploader app (Implemented Java app calling NICE endpoints) - Schwab

Implemented an API using Node.js with Express.js that serves up fake naval data. 
It was created to be used in a corporate context. - CACI

Team lead on a Computer Vision project predicting schizophrenia using Neural Nets 
and other computer vision techniques. Implemented the preprocessing logic on 
the data and handled major planning tasks. - school project

Machine Learning algorithm that diagnoses schizophrenia based on 
EEG data with 100% accuracy. - Python - school project

Implemented Connect Four using Pygame in Python. - school project`

const education = `Texas State–Graduated Magna Cum Laude. BS in Computer Science. Minor in Applied Math. 
Certified Scrum Developer`
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
      <Route path="/" eleemnt={<Home/>}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<SectionName title="Projects" text={projects} />} />
          <Route path="/education" element={<SectionName title="Education" text={education} />} />
          <Route path="/contact" element={<SectionName title="Contact" text="TESTContact" />} />
          <Route path="/hobbies" element={<SectionName title="Hobbies" text="TESTHobbies" />} />

        </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
