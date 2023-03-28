import React from "react";

import { navbar } from "../../utils/navbar";
import {
  Contact,
  Container,
  Link,
  SocialLink,
  User,
  UserMainImg,
  Wrapper,
} from "./style";

export const Navbar = () => {
  return (
    <Container>
      <UserMainImg />
      <User to={"/components"}>Antd Design</User>
      <Wrapper>
        {navbar.map((value) => (
          <Link key={value.id} to={value.path}>
            {value.title}
          </Link>
        ))}
        <Contact>
          <Contact.User>Yuldashev Iqboljon</Contact.User>
          <SocialLink target="_blank" href="https://t.me/musulman_0201">
            <Contact.Telegram />
          </SocialLink>
          <SocialLink
            target="_blank"
            href="https://www.youtube.com/channel/UCDLAhvbFv2_QEuZer5xvXFA"
          >
            <Contact.Youtube />
          </SocialLink>
          <SocialLink target="_blank" href="https://github.com/iqboljon-0203">
            <Contact.Git />
          </SocialLink>
        </Contact>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
