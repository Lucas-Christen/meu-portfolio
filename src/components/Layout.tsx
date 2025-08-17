import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// O Layout agora recebe 'activeSection' como prop
const Layout: React.FC<{ children: React.ReactNode; activeSection: string }> = ({ children, activeSection }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* E passa a prop para a Navbar */}
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
