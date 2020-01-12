import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Video from "../components/video"

const IndexPage = () => (
  <Layout>
    <div>
      <Video
        data={{
          title: "Youtube Video Looper",
          videoURL:
            "https://www.youtube.com/embed/dQw4w9WgXcQ?loop=1%playlist=dQw4w9WgXcQ",
        }}
      />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
