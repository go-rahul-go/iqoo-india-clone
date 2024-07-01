
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import { lazy, Suspense, useEffect, useState, createContext } from 'react';





const Home = lazy(() => import("./pages/Home.jsx"));
const Z9x = lazy(()=>import("./pages/Z9x.jsx"))
const Z9xGallery= lazy(()=> import("./pages/Z9xGallery.jsx"))
const Z9xParameter=lazy(()=> import("./pages/Z9xParameter.jsx"))
const Estore=lazy(()=>import("./pages/Estore.jsx"));
const AllProducts=lazy(()=>import("./pages/AllProducts.jsx"));
const Support=lazy(()=>import("./pages/Support.jsx"))
const About=lazy(()=>import("./pages/About.jsx"));

export const Display = createContext();
/*display context api to find out mob nav bar is open or not if open hide all the other components 
except nav and header component*/

function App() {

  const [mobMenuSituation, changeMobMenuSituation] = useState(false);
  // console.log(mobMenuSituation)
  return (
    <>
      <Nav changeMobMenuSituation={changeMobMenuSituation} />
      <Display.Provider value={mobMenuSituation}>
        <Suspense fallback={<div>...loading</div>}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/z9x" element={<Z9x/>}/>
            <Route path="/z9x/gallery" element={<Z9xGallery/>}/>
            <Route path="/z9x/parameter" element={<Z9xParameter/>}/>
            <Route path="/estore" element={<Estore/>}/>
            <Route path="/products" element={<AllProducts/>}/>
            <Route path="/support" element={<Support/>}/>
            <Route path="/about" element={<About/>}/>
            
          </Routes>
        </Suspense>
      </Display.Provider>
    </>
  )
}

export default App;
