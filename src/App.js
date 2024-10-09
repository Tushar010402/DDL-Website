import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import HomePage from './Components/HomePage/HomePage.js'; // Ensure this path is correct
import TermAndConditions from './Components/TermAndConditions/TermAndConditions.js';
import HorizontalNavbar from './Components/HorizontalNavbar/HorizontalNavbar.js';
import RightSideButton from './Components/RightSideButton/RightSideButton.js';
import H3N2 from './Components/H3N2/H3N2.js';
import SwineFlue from './Components/SwinFlueFile/SwineFlue.js';
import CoronaVirus from './Components/CoronaVirus/CoronaVirus.js';
import Feedback from './Components/Feedback/Feedback.js';
import Healthguide from './Components/Healthguide/Healthguide.js';
import AllergicIntolerant from './Components/Blogs/AllergicIntolerant/AllergicIntolerant.js';
import Magnesium from './Components/Blogs/Magnesium/Magnesium.js';
import HealthGummies from './Components/Blogs/HealthGummies/HealthGummies.js';
import HealthDrink from './Components/Blogs/HealthDrink/HealthDrink.js';
import FitBlog from './Components/Blogs/FitBlog/FitBlog.js';
import DynamicDuo from './Components/Blogs/DynamicDuo/DynamicDuo.js';
import CardioBlog from './Components/Blogs/CardioVascular/CardioVascular.js';
import OrganicAcid from './Components/Blogs/OrganicAcid/OrganicAcid.js';
import DustMite from './Components/Blogs/DustMite/DustMite.js';
import Career from './Components/Career/Career.js';
import HomeCollection from './Components/HomeCollection/HomeCollection.js';
import TestProfiles from './Components/TestProfiles/TestProfiles.js';
import { TestPackageProvider } from './Components/TestProfiles/TestPackageContext.js';
import styled from 'styled-components';
import NewsInWebsite from './Components/News/News.js';
import BlogDetail from './Components/Healthguide/BlogDetail.js';
import ArticleDetail from './Components/Healthguide/ArticleDetail.js';
import Bacteriophage from './Components/Bacteriophage/Bacteriophage.js';
import Legacy from './Components/Legacy/Legacy.js';
import QualityAssurance from './Components/QualityAssurance/QualityAssurance.js';
import VirtalTour from './Components/VirtualTour/VirtualTour.js';
import ResearchAndTrials from './Components/ResearchAndTrials/ResearchAndTrials.js';
import Recognition from './Components/Recognition/Recognition.js';
import AllergyWeb from './Components/AllergyWeb/AllergyWeb.js';
import ServicesWeb from './Components/Services/Services.js';
import ServiceHaematology from './Components/Services/Haematology/Haematology.js';
import ServiceBiochemistry from './Components/Services/Biochemistry/Biochemistry.js';
import ServiceClinicalPathology from './Components/Services/ClinicalPathology/ClinicalPathology.js';
import ServiceMicrobiology from './Components/Services/Microbiology/Microbiology.js';
import ServiceHistocytopathology from './Components/Services/Histocytopathology/Histocytopathology.js';
import ServiceMolecularbiology from './Components/Services/MolecularBiology/MolecularBiology.js';
import ServiceFlowcytometry from './Components/Services/FlowCytometry/FlowCytometry.js';
import SpecializedTesting from './Components/Services/SpecializedTesting/SpecializedTesting.js';
const App = () => {
  return (
    <Router>
      <TestPackageProvider> {/* Wrapping components with context provider  */}
        <div>
          <Navbar />
          <HorizontalNavbar />
          <RightSideButton />
          <Routes>
          <Route path="/ServiceSpecializedTestingForHospitals" element={<SpecializedTesting />} />
          <Route path="/ServiceFlowcytometry" element={<ServiceFlowcytometry />} />
          <Route path="/ServiceMolecularbiology" element={<ServiceMolecularbiology />} />
          <Route path="/ServiceHistocytopathology" element={<ServiceHistocytopathology />} />
          <Route path="/ServiceMicrobiology" element={<ServiceMicrobiology />} />
          <Route path="/ServiceClinicalpathology" element={<ServiceClinicalPathology />} />
          <Route path="/ServiceBiochemistry" element={<ServiceBiochemistry />} />
          <Route path="/ServiceHaematology" element={<ServiceHaematology />} />
          <Route path="/Services" element={<ServicesWeb />} />
          <Route path="/ServiceAllergytesting" element={<AllergyWeb />} />
          <Route path="/Recognition" element={<Recognition />} />
          <Route path="/ResearchAndTrials" element={<ResearchAndTrials />} />
          <Route path="/VirtalTour" element={<VirtalTour />} />
          <Route path="/QualityAssurance" element={<QualityAssurance />} />
          <Route path="/Legacy" element={<Legacy />} />
          <Route path="/ServiceBacteriophageSenstivityTesting" element={<Bacteriophage />} />
          <Route path="/articles/:url_name" element={<ArticleDetail />} />
            <Route path="/blogs/:url_name" element={<BlogDetail />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/News" element={<NewsInWebsite />} />
            <Route path="/terms-and-conditions" element={<TermAndConditions />} />
            <Route path="/h3N2" element={<H3N2 />} />
            <Route path="/SwineFlue" element={<SwineFlue />} />
            <Route path="/CoronaVirus" element={<CoronaVirus />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/Healthguide" element={<Healthguide />} />
            {/* <Route path="/blogs/allergic-intolerant-food" element={<AllergicIntolerant />} />
            
            <Route path="/blogs/Are-health-gummies-good-The-pros-and-cons" element={<HealthGummies />} />
            <Route path="/blogs/Decoding-Health-Drinks-Are-They-Really-Healthy" element={<HealthDrink />} />
            <Route path="/blogs/FIT-or-FOBT:-which-is-a-better-screening-Test-for-Colorectal-Cancer?" element={<FitBlog />} />
            <Route path="/blogs/The-Dynamic-Duo:-Exploring-the-Remarkable-Benefits-of-Vitamin-A-and-E-for-Your-Health-and-Well-being" element={<DynamicDuo />} />
            <Route path="/blogs/Managing-Elevated-Lp(a)-Levels-for-Cardiovascular-Health" element={<CardioBlog />} />
            <Route path="/blogs/Discover-your-inner-health-Through-Organic-Acids-Testing-(OAT)" element={<OrganicAcid />} />
            <Route path="/blogs/house-dust-mite-allergy" element={<DustMite />} /> */}
            <Route path="/Careers" element={<Career />} />
            <Route path="/HomeCollectionServices" element={<HomeCollection />} />
            <Route path="/health-checkup-packages" element={<TestProfiles />} />
            
            {/* Add other routes here */}
          </Routes>
          <Footer /> {/* Ensure Footer component exists */}
        </div>
      </TestPackageProvider>
    </Router>
  );
};

const Home = () => {
  return (
      <HomeContainer>
          <h1>Welcome to Dr. Dangs Lab</h1>
          <p>Dr. Dangs Lab welcomes and encourages applications from every individual trained in various fields of lab medicine...</p>
      </HomeContainer>
  );
};

export default App;

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: #f9f9f9;
    padding: 20px;
    text-align: center;

    h1 {
        margin-bottom: 20px;
    }

    p {
        max-width: 600px;
    }
`;