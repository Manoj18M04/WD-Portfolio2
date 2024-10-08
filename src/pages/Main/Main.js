import React from 'react'
import { Helmet } from 'react-helmet'

import { Landing, About, Skills, Education, Experience, Contacts, Navbar, Projects, Testimonials, Blog } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet> 
            <Navbar />       
            <Landing />
            <About />
            <Skills />
            <Education />            
            <Projects />
            <Testimonials />
            <Experience />
            <Blog />
            <Contacts />
        </div>
    )
}

export default Main
