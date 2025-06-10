import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { LoadingScreen } from './components/common/LoadingScreen';
import Footer from './components/Footer';
import { routes } from './routes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;