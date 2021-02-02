import { Link, withRouter } from "react-router-dom";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="intro">
        <div className="title">Self-Introduction</div>
        <p>
          Hi, I'm TERRY, a year two student from University of Hong Kong
          majoring in Information System and Computer Science. Under the
          Covid-19 pandemic, university life (aka. Online Learning) is kind of
          boring. Luckily, the Internet is always there with us. It enables
          people with enthusiasm like me to learn, create a lut of fun stuff by
          myself. Big Thanks, Internet!
        </p>
      </div>
      <div className="interests">
        <div className="title">Things I Like to Do</div>
        <div className="subtitle">~ Maybe Just Skip Right into the List ~</div>
        <p>
          <span>Just Some Lipsum</span>
          Online Learning really gives me a lot of spare time to explore some
          interesting stuff. In this period, I have looked into a number of
          fields including cybersecurity (including crypto, web/sys pentest),
          web development (what I am doing now!), game development and also 3D
          modelling. I got to say it's quite a long journey to discover one's
          interests, but it's certainly worth it. Here's a short list:
        </p>
        <table>
          <tr>
            <th>Web Development</th>
            <td>
              Well making my own website is kind of cool, isn't it? (With MERN
              Stack)
            </td>
          </tr>
          <tr>
            <th>Game Development</th>
            <td>
              Obsessed with mini-games as much as making games especially VR one
              (With Unity3D)
            </td>
          </tr>
          <tr>
            <th>3D Modelling</th>
            <td>
              Love creating some stunning animations as well as stylish assets
              for my games (With Blender)
            </td>
          </tr>
        </table>
      </div>
      <div className="guide">
        <div>Want to see some cool projects?</div>
        <Link to="/projects">Checkout Here</Link>
      </div>
    </div>
  );
};

export default withRouter(About);
