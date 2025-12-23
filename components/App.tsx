// import React from 'react';
// import './App.css';
// import HomePage from "./HomePage";
// import AboutUs from './AboutUs';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ServicesPage from './servicesPage';
// import InvestmentAdvisory from './InvestmentAdvisory';
// import AssetManagement from './AssetManagement';
// import CorporateLeasing from './CorporateLeasing';
// import WorkspaceSolutions from './WorkspaceSolutions';
// import Properties from './Properties';
// import IndivisualPropertiesPage from './pages/IndivisualProperties/IndivisualPropertiesPage';
// import ScrollToTop from './ScrollToTop';
// import Layout from './Layout';
// import Blogs from './components/Blogs';
// import IndivisualBlogPage from './pages/IndivisualBlogPage/IndivisualBlogPage';
// import AllCaseStudies from './pages/All Case Studies/AllCaseStudies';
// import CaseStudyDetailITC from './pages/All Case Studies/CaseStudyDetail/CaseStudyDetailITC';
// import Resources from './components/Resources';
// import ContactUs from './pages/ContactUs/ContactUs';
// import DlfPage from './components/dlfPage';
// import CaseStudyDetailVistara from './pages/All Case Studies/CaseStudyDetail/CaseStudyVistara';
// import CaseStudyDetailSebia from './pages/All Case Studies/CaseStudyDetail/CaseStudySebia';
// import CaseStudyDetailCremica from './pages/All Case Studies/CaseStudyDetail/CaseStudyCremica';
// import TermsNConditions from './TermsNConditions';
// import InTheNews from './InTheNews';
// import Page404 from './Page404';
// import LandingPage from './pages/landingPage/LandingPage';
// import ThankYou from './pages/landingPage/ThankYou';
// import { useState } from 'react';
// import { Navigate } from 'react-router-dom';

// function App() {
//  const [formSubmitted, setFormSubmitted] = useState(false);

//   return (
//     <Router>
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<HomePage />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/our-services" element={<ServicesPage />} />
//           <Route path="/our-services/investment-advisory" element={<InvestmentAdvisory />} />
//           <Route path="/our-services/asset-management" element={<AssetManagement />} />
//           <Route path="/our-services/corporate-leasing" element={<CorporateLeasing />} />
//           <Route path="/our-services/workspace-solutions" element={<WorkspaceSolutions />} />
//           <Route path="/property" element={<Properties />} />
//           <Route path="/property/dlf-cyber-city" element={< DlfPage />} />
//           <Route path="/property/:url" element={<IndivisualPropertiesPage />} />
//           <Route path="/blogs" element={<Blogs />} />
//           <Route path="/blog/:url" element={<IndivisualBlogPage />} />
//           <Route path="/case-study" element={<AllCaseStudies />} />
//           <Route path="/case-study/ITC" element={<CaseStudyDetailITC />} />
//           <Route path="/case-study/Vistara" element={<CaseStudyDetailVistara />} />
//           <Route path="/case-study/Sebia" element={<CaseStudyDetailSebia />} />
//           <Route path="/case-study/Cremica" element={<CaseStudyDetailCremica />} />
//           <Route path="/resources" element={<Resources />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/terms-and-conditions" element={<TermsNConditions />} />
//           <Route path="/in-the-news" element={<InTheNews/>}/>
//           <Route path="*" element={<Page404/>}/>
//           <Route path="/LandingPage" element={<LandingPage setFormSubmitted={setFormSubmitted} />}/>
//              <Route
//           path="/ThankYou"
//           element={
//             formSubmitted ? <ThankYou /> : <Navigate to="/" replace />
//           }
//         />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
