import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Layout from '@components/Layout'
import Section from '@components/Section'
import SEO from '@components/SEO'

/**
 * The home page of Narative.co!
 */
function NovealPage({ data, location }) {
  const contentful = data.allContentfulPage.edges[0].node
  const navConfig = {
    offset: true,
    fixed: true,
    theme: 'dark',
  }

  const footerConfig = {
    visible: true,
    theme: 'light',
  }

  return (
    <Layout
      background="linear-gradient(180deg, #fff 55%, #D9DBE0 100%)"
      location={location}
      nav={navConfig}
      footer={footerConfig}
    >
      <>
        <SEO
          title={contentful.seo.title}
          description={contentful.seo.description}
          image={contentful.seo.image.file.url}
          pathname={location.pathname}
        />
        <Section>
          <PreviewContainer>
            <Preview src="https://novela.narative.co" />
          </PreviewContainer>
        </Section>
      </>
    </Layout>
  )
}

export default NovealPage

export const pageQuery = graphql`
  query NovealPageQuery {
    allContentfulPage(filter: { pageName: { eq: "Home" } }) {
      edges {
        node {
          seo {
            title
            description
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  }
`

const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 75px auto 0;

  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 94%;
    left: 5%;
    top: 2%;
    background: rgba(0, 0, 0, 0.2);
    filter: blur(110px);
  }
`

const Preview = styled.iframe`
  position: relative;
  width: 100%;
  border: none;
  height: 600px;
`
