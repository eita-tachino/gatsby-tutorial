import React from "react"
import styles from "../components/blog.module.css"
import Layout from "../components/layout"
const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p className={styles.text}>
          loremipsum,loremipsum,loremipsum,loremipsum,
          loremipsum,loremipsum,loremipsum,loremipsum,
          loremipsum,loremipsum,loremipsum,loremipsum,
          loremipsum,loremipsum,loremipsum,loremipsum,
          loremipsum,loremipsum,loremipsum,loremipsum,
        </p>
      </div>
    </Layout>
  )
}

export default blog
