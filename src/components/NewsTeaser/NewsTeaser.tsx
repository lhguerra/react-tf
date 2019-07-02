import * as React from "react";

const NewsTeaser = () => (
  <article>
    <header>
      <h3>News</h3>
    </header>
    <main>
      <h4>Checked out the blog?</h4>
      <span>Wednesday Jan 23</span>
      <img src="http://lorempixel.com/500/500" />
      <p>
        If you haven't read the official TF2 blog, it's full of insights into
        our development process, links to notable community productions, and
        random stories about our lov of hats. Hit the button below to take a
        look.
      </p>
    </main>
    <a>Read More</a>
  </article>
);

export default NewsTeaser;
