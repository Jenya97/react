import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../../Css/component";
import { HeaderPart,HeaderIcons } from "./header";
import heart from "./heart.svg";
export default function Header() {
  return (
    <header>
      <Container>
        <HeaderPart>
          <Link to="/">
            <img src="img/logo.png" alt="" />
          </Link>
          <HeaderIcons>
          <Link to="/favorite">
            <img src={heart} alt="" />
          </Link>
          <Link to="/basket">Basket</Link>
          </HeaderIcons>
        </HeaderPart>
      </Container>
    </header>
  );
}
