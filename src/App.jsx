import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Launch from './components/launch/Launch';
import Hero from './components/hero/Hero';
import Most from './components/hero/Most';
import GenAI from './components/hero/GenAI';
import Professional from './components/hero/Professional';
import Learning from './components/hero/Learning';
import Degree from './components/hero/Degree/Degree';
import Programs from './components/hero/Programs';
import ExploreCourses from './components/hero/ExploreCourses';
import LearnerOutcomes from './components/hero/LearnerOutcomes';
import Testimonials from './components/hero/Testimonials';
import Nextstep from './components/hero/Nextstep';
import Footer from './components/footer/Footer';
import Login from './components/hero/login/Login'; 
import Signup from './components/hero/login/Signup';
import CareerLaunchSection from './components/launch/CareerLaunchSection';
import Onlinedegree from './components/navbar/Onlinedegree';
import { ProjectManager } from './components/launch/ProjectManager';
import EnrollmentSection from './components/hero/Degree/EnrollmentSection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Launch />
            <Most />
            <GenAI />
            <Professional />
            <Learning />
            <Degree />
            <Programs />
            <ExploreCourses />
            <LearnerOutcomes />
            <Testimonials />
            <Nextstep />
          </>
        } />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/careerlaunchsection" element={<CareerLaunchSection />}/>
        <Route path="/onlinedegree" element={<Onlinedegree/>}/>
        <Route path="/projectmanager" element={<ProjectManager/>}/>
        <Route path="/enrollmentsection" element={<EnrollmentSection/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;