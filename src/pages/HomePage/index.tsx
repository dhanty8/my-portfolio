import Layout from "../../components/layout";
import adelia from "../../assets/adelia.png";
import hannon from "../../assets/hannon.png";
import javascriptLogo from "../../assets/js.png";
import nextLogo from "../../assets/next.png";
import pokemon from "../../assets/pokemon.png";
import reactLogo from "../../assets/react.png";
import shadcnLogo from "../../assets/shadcn.png";
import tailwindLogo from "../../assets/tailwind.png";
import typescriptLogo from "../../assets/ts.webp";
import viteLogo from "../../assets/vite.svg";
import wanderer from "../../assets/Wanderer.svg";

const Index = () => {
  const projects = [
    {
      img: wanderer,
      title: "Wanderer",
      desc: "A dynamic web application designed to facilitate seamless tours and travel experiences for globetrotters. This platform empowers users to effortlessly book a variety of tours directly through the application. this project is using React JS, Typescript, Tailwind, and Vite",
      live: "https://wanderer-delta.vercel.app/",
      code: "https://github.com/Wanderer-Asia/Wanderer-FE",
    },
    {
      img: hannon,
      title: "Hannon",
      desc: "An innovative e-commerce platform tailored for the rental of outdoor and hiking activity tools. this project is using React JS, Typescript, Tailwind, and Vite",
      live: "https://hannonapp.netlify.app/",
      code: "https://github.com/Hannon-App/FrontEnd",
    },
    {
      img: pokemon,
      title: "Pokemon",
      desc: "is a sophisticated gaming platform driven by an open-source API provided by PokeAPI. this project is using React JS, Typescript, Tailwind, and Vite",
      live: "https://pokemon-app-dhanty8.vercel.app/",
      code: "https://github.com/dhanty8/pokemon-app",
    },
  ];

  const techStack = [
    {
      img: javascriptLogo,
      title: "Javascript",
    },
    {
      img: typescriptLogo,
      title: "Typescript",
    },
    {
      img: reactLogo,
      title: "React JS",
    },
    {
      img: nextLogo,
      title: "Next JS",
    },
    {
      img: viteLogo,
      title: "Vite",
    },
    {
      img: tailwindLogo,
      title: "Tailwind CSS",
    },
    {
      img: shadcnLogo,
      title: "Shadcn",
    },
  ];
  return (
    <Layout>
      <section className="px-5 py-32" id="home">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="hero-info pb-5 md:pb-0">
            <h1 className="text-4xl lg:text-6xl font-light">
              Hi, I'm <br />
              <span className="text-second font-semibold">Adelia Dhanti</span>
            </h1>

            <p className="py-5 text-justify pr-10">
              Mainly learning about web development with React Js. I have
              completed several projects, one of which is wanderer. It's an app
              for Booking tours, on this project I am responsible for developing
              the UI/UX, Slicing the UI, and also Integrate the API. Currently I
              am very motivated to explore my capabilities by taking a new
              opportunity to start a career as a Frontend Engineer.
            </p>

            {/* <a
              href="/#projects"
              className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
            >
              See Projects
            </a> */}
          </div>

          <div className="pr-10">
            <img
              src={adelia}
              alt="coding illustration"
              className="ml-auto w-[25rem] rounded-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-32" id="projects">
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
          <div className="about-info mb-5">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-second pb-2">
              Projects
            </h2>

            <p className="pb-5">
              These are some of my best projects. I have built these with React.
            </p>
          </div>

          <div className="about-img"></div>
        </div>

        <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
          {projects.map((project, i) => {
            return (
              <div className="relative" key={i}>
                <img src={project.img} alt={project.title} className="w-full" />
                <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-full  bg-main  opacity-0 duration-500 justify-center flex-col hover:opacity-100 rounded-md gap-5">
                  <p className="py-5 text-justify px-10">{project.desc}</p>

                  <div className="mx-auto text-white">
                    <a
                      href={project.live}
                      target="_blank"
                      className="px-5 py-3 bg-second mr-5 font-bold rounded-md  hover:shadow-lg hover:shadow-second/50"
                    >
                      Live
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      className="px-6 py-3 bg-second font-bold rounded-md  hover:shadow-lg hover:shadow-second/50"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-primary px-5 py-32" id="projects">
        <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
          <div className="about-info mb-5">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-second pb-2">
              Technology Stack
            </h2>

            <p className="pb-5">These are some of my technology stack.</p>
          </div>

          <div className="about-img"></div>
        </div>

        <div className="projects container mx-auto grid md:grid-cols-4 gap-10 items-center">
          {techStack.map((stack, i) => {
            return (
              <div className="relative" key={i}>
                <img
                  src={stack.img}
                  alt={stack.title}
                  className="w-full rounded-md"
                />
                <div className="flex absolute left-0 right-0 top-0 bottom-0 mx-auto w-full  bg-main rounded-md opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                  <p className="py-5 text-center px-10">{stack.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
