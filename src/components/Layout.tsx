import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Estado para controlar qual seção está visível
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        {/*
          Aqui, clonamos cada componente filho (as seções) e injetamos
          a função `setActiveSection` como uma prop em cada um deles.
        */}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { setActiveSection } as any);
          }
          return child;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;