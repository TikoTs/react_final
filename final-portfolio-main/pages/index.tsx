"use client";
import Head from "next/head";
import {
  StyledHome,
  Name,
  Hometxt,
  SpanProf,
  IconsDiv,
  Icon,
  CircleDiv,
  PagesDiv,
  PageNameHome,
} from "../styled-components/Home.Styled";
import { useMediaQuery } from "react-responsive";
import { pages } from "../components/Header";
import { StyledLink } from "../styled-components/Header.Styled";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Icons {
  src: string;
  link: string;
}

type arrOfIcons = Icons[];

const icons: arrOfIcons = [
  {
    src: "./images/links/facebook.svg",
    link: "https://www.facebook.com/tikitiko.tsakadze",
  },
  {
    src: "./images/links/instagram.svg",
    link: "https://www.instagram.com/tiko_tsakadze/?hl=en",
  },
  {
    src: "./images/links/linkedin2.png",
    link: "https://www.linkedin.com/in/tinatin-tsakadze-ba1215226/",
  },
  {
    src: "./images/links/github.png",
    link: "https://github.com/TikoTs",
  },
];

interface Hooks {
  menu: boolean;
  setMenu: (menu: boolean) => void;
}

export default function Home({ menu }: Hooks) {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  const router = useRouter();
  const [location, setLocation] = useState(router.pathname);

  useEffect(() => {
    setLocation(router.pathname);
  }, [router.pathname]);
  console.log(location);

  return (
    <StyledHome
      gap={isMobile ? (menu ? "20px" : "50px") : menu ? "20px" : "40px"}
    >
      <div>
        <Name
          initial={{ fontSize: "20px" }}
          animate={isMobile ? { fontSize: "30px" } : { fontSize: "48px" }}
          transition={{ duration: 1 }}
        >
          Tinatin Tsakadze
        </Name>
        <Hometxt>
          Passionate <SpanProf>software engineer</SpanProf> from Georgia
        </Hometxt>
        <PagesDiv>
          {pages.map((item) => (
            <StyledLink href={item.link} key={Math.random()}>
              <PageNameHome
                opa={location == item.link ? "1" : "0.7"}
                display={location == item.link ? "block" : "none"}
                anim={location == item.link ? "none" : "opa"}
              >
                {item.name}
              </PageNameHome>
            </StyledLink>
          ))}
        </PagesDiv>
      </div>
      <IconsDiv>
        {icons.map((item) => (
          <Link href={item.link} key={Math.random()} target="_blank">
            <CircleDiv z={menu ? "98" : "101"}>
              <Icon src={item.src} />
            </CircleDiv>
          </Link>
        ))}
      </IconsDiv>
    </StyledHome>
  );
}
