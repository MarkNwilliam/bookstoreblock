import ConnectWallet from './Components/ConnectWallet'
import Hero from './Components/Hero'
import Create from './Components/Create'
import Nfts from './Components/Nfts'
import Success from './Components/Success'

import Features from './Components/Features'
import Aboutus from './Components/Aboutus'
import Support from './Components/Support'
import './App.css';

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import { AnimatePresence } from "framer-motion";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  BrowserRouter,
  Link,
  useLocation,
} from "react-router-dom";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


function App() {

 

  return (

   
    <BrowserRouter>

<AnimatePresence exitBeforeEnter>

    <Routes >
    <Route path="/" element={<Hero />}/>
    <Route  path ="Create" element={<Create />} />
    <Route  path ="Marketplace" element={<Nfts />} />
    <Route  path ="Connect" element={<ConnectWallet />} />
    <Route  path ="Features" element={<Features />} />
    <Route  path ="Support" element={<Support />} />
    <Route  path ="Aboutus" element={<Aboutus />} />
    <Route  path ="Success" element={<Success />} />
    </Routes>
    </AnimatePresence>
    </BrowserRouter>
    
  );
}

export default App;
