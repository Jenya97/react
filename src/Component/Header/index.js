import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from '../../Css/component';
import { HeaderPart } from './header';
export default function Header() {
  return (
    <header>
        <Container>
            <HeaderPart>
               <Link to="/">
                   <img src='img/logo.png' alt=''/>
                </Link>
               <Link to='/basket'>Basket</Link>
            </HeaderPart>
        </Container>
    </header>
  )
}
