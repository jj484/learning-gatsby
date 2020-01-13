import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
//import SEO from "../components/seo"
import Video from "../components/video"

const IndexPage = () => (
  <Layout>
    <div>
      <Video
        data={{
          videoURL: "https://www.youtube.com/dQw4w9WgXcQ",
          formmatedURL:
            "https://www.youtube.com/embed/dQw4w9WgXcQ?loop=1&playlist=dQw4w9WgXcQ",
          submitURL:
            "https://www.youtube.com/embed/dQw4w9WgXcQ?loop=1&playlist=dQw4w9WgXcQ",
        }}
      />
    </div>
  </Layout>
)

export default IndexPage
