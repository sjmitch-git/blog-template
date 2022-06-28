import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Header from './Header/'
import Navigation from './navigation'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props
    console.log(Header)
    return (
      <>
        <Seo />
        <Header />
        <Navigation />
        <main className='container mx-auto'>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
