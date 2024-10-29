// src/App.js

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.js';
import Footer from './Components/Footer/Footer.js';
import HorizontalNavbar from './Components/HorizontalNavbar/HorizontalNavbar.js';
import RightSideButton from './Components/RightSideButton/RightSideButton.js';
import { TestPackageProvider } from './Components/TestProfiles/TestPackageContext.js';
import styled from 'styled-components';

import ScrollToTop from './Components/ScrollToTop.js';

// Lazy load route components
const HomePage = lazy(() => import('./Components/HomePage/HomePage.js'));
const TermAndConditions = lazy(() => import('./Components/TermAndConditions/TermAndConditions.js'));
const H3N2 = lazy(() => import('./Components/H3N2/H3N2.js'));
const SwineFlue = lazy(() => import('./Components/SwinFlueFile/SwineFlue.js'));
const CoronaVirus = lazy(() => import('./Components/CoronaVirus/CoronaVirus.js'));
const Feedback = lazy(() => import('./Components/Feedback/Feedback.js'));
const Healthguide = lazy(() => import('./Components/Healthguide/Healthguide.js'));
const AllergicIntolerant = lazy(() => import('./Components/Blogs/AllergicIntolerant/AllergicIntolerant.js'));
const Magnesium = lazy(() => import('./Components/Blogs/Magnesium/Magnesium.js'));
const HealthGummies = lazy(() => import('./Components/Blogs/HealthGummies/HealthGummies.js'));
const HealthDrink = lazy(() => import('./Components/Blogs/HealthDrink/HealthDrink.js'));
const FitBlog = lazy(() => import('./Components/Blogs/FitBlog/FitBlog.js'));
const DynamicDuo = lazy(() => import('./Components/Blogs/DynamicDuo/DynamicDuo.js'));
const CardioBlog = lazy(() => import('./Components/Blogs/CardioVascular/CardioVascular.js'));
const OrganicAcid = lazy(() => import('./Components/Blogs/OrganicAcid/OrganicAcid.js'));
const DustMite = lazy(() => import('./Components/Blogs/DustMite/DustMite.js'));
const Career = lazy(() => import('./Components/Career/Career.js'));
const HomeCollection = lazy(() => import('./Components/HomeCollection/HomeCollection.js'));
const TestProfiles = lazy(() => import('./Components/TestProfiles/TestProfiles.js'));
const NewsInWebsite = lazy(() => import('./Components/News/News.js'));
const BlogDetail = lazy(() => import('./Components/Healthguide/BlogDetail.js'));
const ArticleDetail = lazy(() => import('./Components/Healthguide/ArticleDetail.js'));
const Bacteriophage = lazy(() => import('./Components/Bacteriophage/Bacteriophage.js'));
const Legacy = lazy(() => import('./Components/Legacy/Legacy.js'));
const QualityAssurance = lazy(() => import('./Components/QualityAssurance/QualityAssurance.js'));
const VirtalTour = lazy(() => import('./Components/VirtualTour/VirtualTour.js'));
const ResearchAndTrials = lazy(() => import('./Components/ResearchAndTrials/ResearchAndTrials.js'));
const Recognition = lazy(() => import('./Components/Recognition/Recognition.js'));
const AllergyWeb = lazy(() => import('./Components/AllergyWeb/AllergyWeb.js'));
const ServicesWeb = lazy(() => import('./Components/Services/Services.js'));
const ServiceHaematology = lazy(() => import('./Components/Services/Haematology/Haematology.js'));
const ServiceBiochemistry = lazy(() => import('./Components/Services/Biochemistry/Biochemistry.js'));
const ServiceClinicalPathology = lazy(() => import('./Components/Services/ClinicalPathology/ClinicalPathology.js'));
const ServiceMicrobiology = lazy(() => import('./Components/Services/Microbiology/Microbiology.js'));
const ServiceHistocytopathology = lazy(() => import('./Components/Services/Histocytopathology/Histocytopathology.js'));
const ServiceMolecularbiology = lazy(() => import('./Components/Services/MolecularBiology/MolecularBiology.js'));
const ServiceFlowcytometry = lazy(() => import('./Components/Services/FlowCytometry/FlowCytometry.js'));
const SpecializedTesting = lazy(() => import('./Components/Services/SpecializedTesting/SpecializedTesting.js'));

const App = () => {
  return (
    <Router>
      <TestPackageProvider> {/* Wrapping components with context provider */}
      <ScrollToTop />
        <AppContainer>
          <Navbar />
          <HorizontalNavbar />
          <RightSideButton />
          <Suspense fallback={<LoadingFallback>Loading...</LoadingFallback>}>
            <Routes>
              {/* Service Routes */}
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

              {/* Dynamic Routes */}
              <Route path="/articles/:url_name" element={<ArticleDetail />} />
              <Route path="/blogs/:url_name" element={<BlogDetail />} />

              {/* Static Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/News" element={<NewsInWebsite />} />
              <Route path="/terms-and-conditions" element={<TermAndConditions />} />
              <Route path="/h3N2" element={<H3N2 />} />
              <Route path="/SwineFlue" element={<SwineFlue />} />
              <Route path="/CoronaVirus" element={<CoronaVirus />} />
              <Route path="/Feedback" element={<Feedback />} />
              <Route path="/Healthguide" element={<Healthguide />} />
              <Route path="/Careers" element={<Career />} />
              <Route path="/HomeCollectionServices.aspx" element={<HomeCollection />} />
              <Route path="/health-checkup-packages" element={<TestProfiles />} />

              {/* Add other routes here */}
            </Routes>
          </Suspense>
          <Footer /> {/* Ensure Footer component exists */}
        </AppContainer>
      </TestPackageProvider>
    </Router>
  );
};

export default App;

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LoadingFallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  font-size: 1.5rem;
  color: #555;
`;
