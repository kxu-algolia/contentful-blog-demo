import React from 'react'
import { Link } from 'gatsby'
import Search from "./search"
import * as styles from './navigation.module.css'

const searchIndices = [{ name: `contentful_demo`, title: `Pages` }]

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>Gatsby Starter Contentful</span>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeClassName="active">
          Blog
        </Link>
      </li>
      <Search indices={searchIndices} />




    </ul>
  </nav>
)

export default Navigation
