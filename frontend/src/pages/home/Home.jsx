import React from 'react'

import Navbar from '../../components/navbar/Navbar';
import Hero from './components/Hero/Hero';
// import Fotter from '../../components/footer/Fotter';
// import SignUp from '../../components/forms/SignUp';
import SignIn from '../../components/forms/SignIn';
import Footer from '../../components/footer/Footer';
import SignUp from '../../components/forms/SignUp';
import Content from '../../components/content/Content'


function Home() {
  return (
    <div>
      <Hero/>
      <Content/>
    </div>
  )
}

export default Home
