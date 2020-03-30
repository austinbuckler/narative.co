import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import SVG from 'react-inlinesvg'

import media from '@styles/media'

import { AboutRow } from './About.Team'

export const companyLogosQuery = graphql`
  query GetCompanyLogosQuery {
    allLogos: file(name: { regex: "/company-logo-all/" }) {
      publicURL
    }
    breatherLogo: file(name: { regex: "/company-logo-breather/" }) {
      publicURL
    }
    hopperLogo: file(name: { regex: "/company-logo-hopper-about/" }) {
      publicURL
    }
    lightspeedLogo: file(name: { regex: "/company-logo-lightspeed/" }) {
      publicURL
    }
    ritualLogo: file(name: { regex: "/company-logo-ritual/" }) {
      publicURL
    }
    ubisoftLogo: file(name: { regex: "/company-logo-ubisoft/" }) {
      publicURL
    }
    unbounceLogo: file(name: { regex: "/company-logo-unbounce/" }) {
      publicURL
    }
    yellowpagesLogo: file(name: { regex: "/company-logo-yellowpages/" }) {
      publicURL
    }
  }
`

function AboutBackground() {
  const {
    allLogos,
    breatherLogo,
    hopperLogo,
    lightspeedLogo,
    ritualLogo,
    ubisoftLogo,
    unbounceLogo,
    yellowpagesLogo,
  } = useStaticQuery(companyLogosQuery)

  return (
    <AboutRow header="Background">
      <TextContainer>
        <Text>
          With years of experience building and marketing products as part of
          in-house teams, we founded Narative both to pursue our own product
          ambitions, and help promising companies to pursue theirs.
        </Text>
      </TextContainer>
      <Desktop>
        <CompanyLogos>
          <SVG src={ubisoftLogo.publicURL} />
          <SVG src={hopperLogo.publicURL} />
          <SVG src={lightspeedLogo.publicURL} />
          <SVG src={yellowpagesLogo.publicURL} />
          <SVG src={breatherLogo.publicURL} />
          <SVG src={unbounceLogo.publicURL} />
          <SVG src={ritualLogo.publicURL} />
        </CompanyLogos>
      </Desktop>
      <Mobile>
        <SVG src={allLogos.publicURL} />
      </Mobile>
    </AboutRow>
  )
}

export default AboutBackground

const Desktop = styled.div`
  ${media.phablet`
    display: none;
  `}
`

const Mobile = styled.div`
  display: none;

  ${media.phablet`
    position: relative;
    display: block;
    margin-top: 45px;
  `}
`

const TextContainer = styled.div`
  max-width: 681px;
`

const Text = styled.p`
  font-size: 22px;
  line-height: 28px;
  color: #fafafa;

  ${media.tablet`
    font-size: 18px;
  `}
`

const CompanyLogos = styled.div`
  margin-top: 80px;
  height: 31px;
  display: flex;
  align-items: center;

  svg {
    &:not(:last-child) {
      margin-right: 48px;
    }
  }

  ${media.tablet`
    flex-wrap: wrap;
    height: auto;
    margin-top: 45px;

    svg {
      max-height: 21px;
      width: auto;
      margin-bottom: 24px;

      &:not(:last-child) {
        margin-right: 31px;
      }
    }


    #logo-ubisoft {
      max-height: 21.77px;
      order: 1;
    }

    #logo-hopper {
      max-height: 19.18px;
      order: 2;
    }

    #logo-yellowpages {
      max-height: 16.63px;
      order: 3;
    }

    #logo-ritual {
      max-height: 11.28px;
      order: 4;
      margin-right: 30px;
    }

    #logo-unbounce {
      max-height: 18.88px;
      order: 5;
    }

    #logo-breather {
      max-height: 16.2px;
      order: 6;
    }

    #logo-lightspeed {
      max-height: 19.6px;
      order: 7;
      margin-right: 0;
    }
  `}
`
