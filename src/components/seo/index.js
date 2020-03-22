import React from "react";
import { string, object, arrayOf } from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, lang, meta, title }) => {
    const { site } = useStaticQuery(
        graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `
    )
    const metaDescription = description || site.siteMetadata.description;
    const metaTitle = title || site.siteMetadata.title;
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={metaTitle}
            titleTemplate={`%s | ${metaTitle}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: metaTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:url`,
                    content: site.siteMetadata.url,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: metaTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:url`,
                    content: site.siteMetadata.url,
                },
            ].concat(meta)}
        >
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-160849560-1"></script>
            <script>
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-160849560-1');`}
            </script>
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `es`,
    meta: [],
    description: ``,
    title: ``,
}

SEO.propTypes = {
    description: string,
    lang: string,
    meta: arrayOf(object),
    title: string,
}
export default SEO
