import * as React from "react"
import styled from "styled-components"

import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Link to="/" className="site-title">{siteTitle}</Link>
    <LinksWrapper>
      <Link to="/products">All products</Link>
      <Link to="/cart">My Cart</Link>
      <Link to="/Contact">Contact us</Link>
    </LinksWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderWrapper = styled.header`
padding: 30px;
display: flex;
justify-content: space-between;
background:#026d5b;
.site-title {
  font-size: 30px;
  font-weight: bold;
  color: white;
}

a {
  text-decoration: none;
  color: white;
  font-size: 15px;
  font-weight: normal;
  text-transform: uppercase;
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
  "Open Sans", "Helvetica Neue", sans-serif;

  :hover {
    text-decoration: underline;
  }
}
`
const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 40px;
`
