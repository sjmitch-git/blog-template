import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import readingTime from 'reading-time'

// import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

import Seo from '../components/seo'
import Layout from '../components/layout'
// import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')
    /* const plainTextBody = documentToPlainTextString(JSON.parse(post.body.raw))
    const { minutes: timeToRead } = readingTime(plainTextBody) */
    const body = post.bodyhtml.bodyhtml

   console.log('BODY', body)

  /*   for (const key in body) {
      if (body.hasOwnProperty(key)) {
          console.log(`${key}: ${body[key]}`);
      }
  } */

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.description}
          image={post.heroImage}
        />
      {/*   <Hero
          image={post.heroImage?.gatsbyImageData}
          title={post.title}
          content={post.description}
        /> */}
        <div className={styles.container}>
          <span className={styles.meta}>
            {post.author?.name} &middot;{' '}
            <time dateTime={post.rawDate}>{post.date}</time> –{' '}
           {/*  {timeToRead} minute read */}
          </span>
          <div className={styles.article}>
           {/*  <div className={styles.body}>
              {post.body?.raw && renderRichText(post.body)}
            </div> */}
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
            <Tags tags={post.keywords} />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/blog/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/blog/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      description {
        description
      }
      date(formatString: "MMMM Do, YYYY")
      publishDate: date
      heroImage
      body {
        raw
      }
      bodyhtml {
        bodyhtml
      }
      keywords
      description {
        description
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
