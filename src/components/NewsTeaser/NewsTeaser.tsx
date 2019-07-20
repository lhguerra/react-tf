import * as React from "react";
import styled from "styled-components";

import { color, font } from "../../theme";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  title: String;
  date: String;
  image: Image;
  text: String;
}

const Container = styled.article`
  font-family: ${font("title")};
  background-color: ${color("pearl")};
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Header = styled.header`
  background-color: ${color("copper")};
  color: ${color("athsSpecial")};
  text-align: center;
`;

const Content = styled.main`
  padding: 1rem 1.5rem;
`;

const Title = styled.h4`
  margin: 0;
  font-size: 1.5rem;
`;

const BlockTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  line-height: 1;
  padding: 1rem 0 0.5rem 0;
`;

const Date = styled.time`
  font-weight: lighter;
  font-size: 1.2rem;
  line-height: 1.5;
`;

const PictureWrapper = styled.div`
  width: 100%;
  height: 300px;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.3rem;
`;

const Text = styled.p`
  padding: 0 0.5rem;
`;

const NewsTeaser = ({ title, date, image: { src, alt }, text }: Props) => (
  <Container>
    <Header>
      <BlockTitle>News</BlockTitle>
    </Header>
    <Content>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <PictureWrapper>
        <Picture src={src} alt={alt} />
      </PictureWrapper>
      <Text>{text}</Text>
    </Content>
    <a>Read More</a>
  </Container>
);

export default NewsTeaser;
