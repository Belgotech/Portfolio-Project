import "./Portfolio.css";
import IMG1 from "../../assets/portfolio6.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio1.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    Image: IMG1,
    title: "Once I Want To Put A Project",
    demo: "https://github.com",
    github: "https://github.com",
  },

  {
    id: 2,
    Image: IMG2,
    title: "Comment That I Will Change ",
    demo: "https://github.com",
    github: "https://github.com",
  },

  {
    id: 3,
    Image: IMG3,
    title: " To Put A Project",
    demo: "https://github.com",
    github: "https://github.com",
  },

  {
    id: 4,
    Image: IMG4,
    title: "Once I Want To Put A Project",
    demo: "https://github.com",
    github: "https://github.com",
  },

  {
    id: 5,
    Image: IMG5,
    title: "Comment That I Will Change",
    demo: "https://github.com",
    github: "https://github.com",
  },

  {
    id: 6,
    Image: IMG6,
    title: " Once I Want To Put A Project",
    demo: "https://github.com",
    github: "https://github.com",
  },
];

//react animation libray

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some OF My Works</h5>
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, Image, title, demo, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Image} alt={title} />
              </div>
              <h3>{title}</h3>
              <a href={github} className="btn">
                Github
              </a>
              <a href={demo} className="btn btn-primary">
                live Demo
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
