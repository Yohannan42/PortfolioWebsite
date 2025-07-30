import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/shared/ThemeSwitcher';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const AboutMeSection = React.lazy(() => import('./components/AboutMeSection'));
const ProjectsPage = React.lazy(() => import('./components/ProjectsPage'));
const ProjectDetailPage = React.lazy(() => import('./components/ProjectDetailPage'));
const SkillsPage = React.lazy(() => import('./components/SkillsPage'));
const ExperiencePage = React.lazy(() => import('./components/ExperiencePage'));

// Loading component with theme support
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-light-bg dark:bg-dark-bg">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-16 h-16 border-4 border-blue-400/20 rounded-full"></div>
    </div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <MainLayout>
              <ThemeSwitcher />
              <Suspense fallback={<LoadingSpinner />}>
                <Home />
              </Suspense>
            </MainLayout>
          } />
          <Route path="/about" element={
            <MainLayout>
              <ThemeSwitcher />
              <Suspense fallback={<LoadingSpinner />}>
                <AboutMeSection />
              </Suspense>
            </MainLayout>
          } />
          <Route path="/projects" element={
            <MainLayout>
              <ThemeSwitcher />
              <Suspense fallback={<LoadingSpinner />}>
                <ProjectsPage />
              </Suspense>
            </MainLayout>
          } />
          <Route path="/project/:projectId" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProjectDetailPage />
            </Suspense>
          } />
          <Route path="/skills" element={
            <MainLayout>
              <ThemeSwitcher />
              <Suspense fallback={<LoadingSpinner />}>
                <SkillsPage />
              </Suspense>
            </MainLayout>
          } />
          <Route path="/experience" element={
            <MainLayout>
              <ThemeSwitcher />
              <Suspense fallback={<LoadingSpinner />}>
                <ExperiencePage />
              </Suspense>
            </MainLayout>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
