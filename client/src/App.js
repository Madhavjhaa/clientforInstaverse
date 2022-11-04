import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import Home from './components/Home';
import styles from './styles';
import AppBar from './components/AppBar';
import AuthForm from './components/AuthForm';
//import nav  from './components/AppBar/nav';
//import nav from './components/AppBar1/nav';

const {  Footer } = Layout;

const App = () => {
    return ( <div> 
        <BrowserRouter>
            <Layout style={styles.layout}>
                <AppBar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/authform" element={<AuthForm />}/>
                </Routes>
                <Footer  style={styles.footer}>2022 Instaverse</Footer>
            </Layout>
        </BrowserRouter> 
        {/* <header> {nav} </header> */}
   </div> ) ;}
   const routs =()=> {
  return< BrowserRouter >
      <div>
         <ul>
            <li>h
               {/* <Link to="/">Home</Link> */}
            </li>
            <li>
               {/* <Link to="/ aboutus ">Users</Link> */}
            </li>
            <li>
               {/* <Link to="/ contactus ">Contact</Link> */}
            </li>
         </ul>
         <Route exact path="/" component={App} />
         <Route path="" component={""} />
         <Route path="" component={""} />
      </div>
   </ BrowserRouter >
   };


export default App ;