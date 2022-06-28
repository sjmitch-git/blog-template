import * as React from 'react'
import {useStaticQuery, graphql } from 'gatsby'

/* import Navbar from "./navbar"
import Logo from "./logo"
*/

import { header } from './index.module.css'

const Header = () => {

    const navItems = [
        {'home': '/'},
        {'archive': '/archive/'},
        {'bookmarks': '/bookmarks/'},
        {'about': '/about/'}
    ]

    

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `)

    const {title, description} = data.site.siteMetadata
    
    return (
        <header className={header}>
            <div>
                <p>{title} - {description}</p>
            </div>
            
        </header>
    )
}

export default Header