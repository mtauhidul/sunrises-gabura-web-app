import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import About from '../views/about/About';
import Admin from '../views/admin/Admin';
import AdminLogin from '../views/adminLogin/AdminLogin';
import Contact from '../views/contact/Contact';
import Dashboard from '../views/dashboard/Dashboard';
import Elibrary from '../views/elibrary/Elibrary';
import Home from '../views/home/Home';
import Notfound from '../views/notfound/Notfound';
import Policy from '../views/policy/Policy';
import Registration from '../views/registration/Registration';
import Signin from '../views/signin/Signin';
import Vision from '../views/vision/Vision';
import Volunteer from '../views/volunteer/Volunteer';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';

const MainRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/vision' element={<Vision />} />
        <Route path='/volunteer' element={<Volunteer />} />
        <Route path='/e_library' element={<Elibrary />} />
        <Route path='/registration/:id' element={<Registration />} />
        <Route path='/login/:id' element={<Signin />} />
        <Route path='/admin_login' element={<AdminLogin />} />
        <Route
          path='/dashboard/:id'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path='/admin'
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default MainRouter;
