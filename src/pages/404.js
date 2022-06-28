import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import {
  pagetitle,
  pagecontent
} from '../components/layout.module.css'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className={pagecontent}>
        <header className='my-8 text-danger'>
          <h1 className={pagetitle}>404: Not found</h1>
        </header>
        <div className="mx-auto max-w-full md:max-w-2xl mb-12">
          <div className="mb-12">
            <p className="mb-4 text-center">
            You just hit a route that doesn&#39;t exist... the sadness.
            </p>
            </div>
        </div>
    </div>
  </Layout>
)

export default NotFoundPage
