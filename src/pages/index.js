import * as React from "react"
import { navigate } from "gatsby-link"
import styled from "styled-components"

import Layout from "../components/layout"
import PrimaryButton from "../components/PrimaryButton"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ContentWrapper>
      <BannerImage src="https://images.unsplash.com/photo-1623771702313-39dc4f71d275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
      <TextWrapper>
        <Title>Discover a world of captivating stories at our Bookstore!</Title>
        <Subtitle>Free shipping on your first order!</Subtitle>
        <PrimaryButton text="Explore all products" onClick={() => navigate('products')} />
      </TextWrapper>
    </ContentWrapper>
  </Layout>
)

export default IndexPage

const ContentWrapper = styled.div`
  position: relative;
`

const BannerImage = styled.img`
  height: 500px;
  width: 100%;
  object-fit: cover;
  margin: 0;
`

const TextWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: grid;
  gap: 10px;
`

const Title = styled.h1`
  color: white;
  margin: 0;
`

const Subtitle = styled.p`
  color: rgba(255,255,255,0.7);
  margin: 0;

`