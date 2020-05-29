import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function withImageData(WrappedComponent) {
  return (props) => (
    <StaticQuery
      query={graphql`
        query {
          staticSitesImage: file(relativePath: { eq: "static-websites.png" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          customIntegrationsImage: file(
            relativePath: { eq: "custom-integrations.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          daleMcGrewImage: file(relativePath: { eq: "dale-mcgrew.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => <WrappedComponent {...props} imageData={data} />}
    />
  );
}

const StaticSitesImage = withImageData((props) => (
  <Img fluid={props.imageData.staticSitesImage.childImageSharp.fluid} />
));
const CustomIntegrationsImage = withImageData((props) => (
  <Img fluid={props.imageData.customIntegrationsImage.childImageSharp.fluid} />
));
const DaleMcGrewImage = withImageData((props) => (
  <Img fluid={props.imageData.daleMcGrewImage.childImageSharp.fluid} />
));

export { StaticSitesImage, CustomIntegrationsImage, DaleMcGrewImage };
