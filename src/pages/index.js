import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => (
  <div>
    {JSON.stringify(data)}
    Hello world!
  </div>
);

export const query = graphql`
  query {
    markdownRemark {
      id
      frontmatter {
        title
        path
        date
        _PARENT
      }
      html
    }
  }
`;
