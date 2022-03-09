import React from "react"

export default function App() {
  return (
    <main className="App">
      <div className="container">
        <header>
            <img src="./images/glasses.jpeg" alt="self"/>
            <div className="center">
              <h1>Shimanti Guha</h1>
              <h4>frontend developer</h4>
              <h5><a href="https://shimanti.com">shimanti.com</a></h5>
            </div>
        </header>
        <div className="buttons center">
          <button id="email"><a href="mailto:shimanti@gmail.com" rel="noreferrer" target="_blank">email</a></button>
          <button id="linkedin"><a href="https://www.linkedin.com/in/shimantiguha/" target="_blank" rel="noreferrer">linkedin</a></button>
        </div>
        <article className="info">
          <h3>about</h3>
          <p>I am a frontend developer with a particular interest in making things simple and beautiful. </p>
        </article>
        <article className="info">
          <h3>interests</h3>
          <p>Avid reader. Easy-to-make food connoiseur. Travel geek. Pop culture ninja. Entrepreneur.</p>
        </article>
        <footer>
          <div className="socials">
            <a className="socials-link" href="https://www.twitter.com/shimantig" rel="noopener noreferrer" target="_blank">
              <svg className="icon-twitter" viewBox="0 0 26 28">
                <title>twitter</title>
                <path d="M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z">
                </path>
              </svg>
            </a>
            <a className="socials-link" href="https://github.com/shimanti" rel="noopener noreferrer" target="_blank">
              <svg className="icon-github" viewBox="0 0 24 24">
                <title>github</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
                </path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
