import * as React from "react";

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

const NewsTeaser = ({ title, date, image: { src, alt }, text }: Props) => (
  <article>
    <header>
      <h3>News</h3>
    </header>
    <main>
      <h4>{title}</h4>
      <span>{date}</span>
      <img src={src} alt={alt} />
      <p>{text}</p>
    </main>
    <a>Read More</a>
  </article>
);

export default NewsTeaser;
