import React from 'react'
import './App.css'
// import About from './components/about'
import { Routes, Route } from 'react-router-dom';
// import Home from './components/home';
import Layout from './components/Layout';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import { Suspense } from 'react';
import { lazy } from 'react';
import PlaceOrder from './components/place_order';
const App = () => {
  const Home = lazy(() => import('./components/home'));
  const About = lazy(() => import('./components/about'));
  const Products = lazy(()=> import('./components/Products'));
  return (
         <Suspense fallback={<div className="container">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Products/:userId" element={<Products />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
      </Suspense>
  )
}

export default App