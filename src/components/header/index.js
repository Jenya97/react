import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import LetsTalk from './LetsTalk'
import styles from './Header.module.css'

export default function Header() {
    
  return (
    <header>
        <section className='container'>
         <div className={styles.header_part}>
          <Logo/>
          <Nav/>
          <LetsTalk/>
         </div>
        </section>
    </header>
  )
}
