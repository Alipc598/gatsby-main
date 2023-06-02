import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import "./Footer.css"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <Footer>
          <div>
          <p class="copy">&copy; Copyright 2022 of Ali's Store</p>
        <p class="copy">By Ali Ghaedi </p>
          </div>
        </Footer>
      </div>
    </>
  )
}
// ADD
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Footer = styled.footer`
position: fixed;
bottom: 0;
left: 0;
width: 100%;
background-color: #026d5b;
padding: 0.50rem;
text-align: center;
color: white;
`
