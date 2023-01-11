import React from 'react'
import { Link } from 'gatsby'
import Search from "./search"
import * as styles from './navigation.module.css'

const searchIndices = [
  { name: `contentful_demo`, title: `Pages` },
  { name: `contentful_demo_query_suggestions`, title: `Suggestions` }
]

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>Algolia Blog (Contentful)</span>
    </Link>
    <ul className={styles.navigation}>
      <Search indices={searchIndices} />
    </ul>
  </nav>
)

export default Navigation
