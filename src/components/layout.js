/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//import Header from "./header"
import "./layout.css"
import { AppBar, Toolbar } from "@material-ui/core/"
import Typography from "@material-ui/core/Typography"
import "typeface-roboto"

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
      {/*
      <Header siteTitle={data.site.siteMetadata.title} />
      */}
      <div
        style={{
          flex: 1,
        }}
      >
        <AppBar position="static" color="primary">
          <Toolbar>{/* content */}</Toolbar>
          <Typography
            variant="h5"
            noWrap
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >
            Youtube Video Looper
          </Typography>
          <a href="https://github.com/jj484/learning-gatsby">
            <svg
              id="i-github"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="32"
              height="32"
              style={{ width: "100%" }}
            >
              <path
                stroke-width="0"
                fill="currentColor"
                d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"
              />
            </svg>
          </a>
        </AppBar>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 20,
        }}
      >
        <main>{children}</main>

        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
