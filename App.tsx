import React from 'react';
import { View, Text } from 'react-native';
import { NativeRouter as Router, Route, Routes } from 'react-router-native';
import Layout from './components/common/Layout';
import Home from './components/rutes/home';
import ActiveEvents from './components/rutes/activeEvents';
import Contact from './components/rutes/contact';
import { Appstyle } from './Appstyle'; // Importujemy nasze style


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activeEvents" element={<ActiveEvents />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
 