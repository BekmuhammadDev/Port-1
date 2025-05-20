import React, { useEffect,useState } from 'react';
import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa";
import Logo from "./assets/Logo.png"
import html from "./assets/html.svg"
import css3 from "./assets/css.svg"
import sass from "./assets/sass.svg"
import javascript from "./assets/js.svg"
import react from "./assets/reactl.svg"
import bootstrap from "./assets/bootstrap.svg"
import git from "./assets/git.svg"
import figma from "./assets/figma.svg"
import typescript from "./assets/typescript.png"
import KranPortfolio from "./assets/kranPortfolio.png"
import { FaStar } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaArrowUp } from "react-icons/fa";


const skillsData = {
  usingNow: [
    { name: "HTML5", icon: html },
    { name: "CSS3", icon: css3 },
    { name: "SASS", icon: sass },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: react },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Git", icon: git },
    { name: "Figma", icon: figma },
    { name: "TypeScript", icon: typescript },

  ],
};

const testimonials = [
  {
    name: "Javlonbek",
    image: "/images/javlonbek.jpg",
    text: "Bekmuhammad bilan birgalikda ishlash katta zavq. U doimo yangilikka ochiq va jamoa bilan yaxshi ishlaydi.",
    rating: 5,
  },
  {
    name: "Dilnoza",
    image: "/images/dilnoza.jpg",
    text: "Uning frontendga bo‘lgan yondashuvi juda professional. Har doim toza va optimallashtirilgan kod yozadi.",
    rating: 5,
  },
  {
    name: "Shahzod",
    image: "/images/shahzod.jpg",
    text: "Bekmuhammad jamoa ichidagi aloqa va hamkorlikda juda kuchli. Mas'uliyatli va halol inson.",
    rating: 5,
  },
];

const App = () => {

  const projectsData = [
    { title: 'Project', description: 'mobileApps' },
    { title: 'Project', description: 'mobileApps' },
    { title: 'Project', description: 'socialMedia' },
    { title: 'Project', description: 'dataDriven' },
  ];

  const handleNavigate = (category) => {
    navigate(`/projects/${category.toLowerCase()}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // useEffect(() => {
  //   AOS.init({ duration: 2000 });
  // }, []);
  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 py-4 px-8 flex justify-between items-center transition-all duration-300 ${isScrolled
            ? "backdrop-blur-md bg-white/30 shadow-md"
            : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-8 md:h-10" />

        {/* Navigation */}
        <nav className="flex items-center space-x-6 text-white text-sm">
          <a href="#about" className="hover:text-gray-300">About me</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#portfolio" className="hover:text-gray-300">Portfolio</a>
          <a
            href="#contact"
            className="bg-white text-black px-4 py-1 rounded-full text-xs font-semibold hover:bg-gray-200"
          >
            CONTACT ME
          </a>
        </nav>
      </header>
      <main>
        <section className="w-full min-h-screen relative flex flex-col md:flex-row overflow-hidden">
          {/* Chap taraf: qiya shakl (gray background) */}
          <div className="w-full md:w-1/2 relative z-10 bg-gray-200 flex flex-col justify-center items-start px-10 py-20 clip-diagonal-left">
            <h2 className="text-xl text-gray-700 mb-2">Hi, I am</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-black">Bekmuhammmad</h1>
            <p className="text-gray-500 font-semibold mt-2 mb-6">
              Front-end Developer
            </p>

            {/* Ijtimoiy ikonlar */}
            <div className="flex gap-4">
              <button className="bg-white p-3 rounded shadow hover:bg-gray-100">
                <FaAt className="text-xl text-black" />
              </button>
              <button className="bg-white p-3 rounded shadow hover:bg-gray-100">
                <FaGithub className="text-xl text-black" />
              </button>
              <button className="bg-white p-3 rounded shadow hover:bg-gray-100">
                <FaLinkedin className="text-xl text-black" />
              </button>
            </div>
          </div>

          {/* O'ng taraf: qora fon + rasm */}
          <div className="w-full md:w-1/2 bg-black flex justify-center items-center relative z-0">
            <div className="relative text-center">
              <img
                src="/your-image.jpg"
                alt="Profile"
                className="h-[450px] object-cover"
              />
              <p className="text-white text-[10px] mt-2">
                this is not my photo, but I dearly hope to get one just like this
              </p>
            </div>
          </div>
        </section>

        <section className="w-full bg-gradient-to-b from-[#f5f5f5] to-[#e6e6e6] py-20 px-6 text-center">
          {/* Title */}
          <div className="mb-12">
            <h2 className="inline-block border-2 border-black px-10 py-2 text-lg tracking-widest font-semibold">
              ABOUT ME
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-gray-600 text-sm">
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus.
              Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est.
            </p>

            {/* Explore Button */}
            <div className="flex justify-center items-center space-x-4 mt-6">
              <span className="w-px h-4 bg-black"></span>
              <span className="text-xs tracking-widest font-semibold">EXPLORE</span>
              <span className="w-px h-4 bg-black"></span>
            </div>

            {/* Divider */}
            <div className="my-6">
              <span className="inline-block w-20 h-px bg-black"></span>
              <span className="mx-2">⋯⋯⋯</span>
              <span className="inline-block w-20 h-px bg-black"></span>
            </div>
          </div>

          {/* Service Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto text-left px-4">
            {/* Design */}
            <div className="relative pl-8">
              <h3 className="text-sm font-bold tracking-widest mb-2">DESIGN</h3>
              <p className="text-gray-600 text-sm">
                I can design the site based on your needs and suggestions.
                I can also design the site from scratch and consult you during the job.
              </p>
            </div>

            {/* Development */}
            <div className="relative pl-8">
              <h3 className="text-sm font-bold tracking-widest mb-2">DEVELOPMENT</h3>
              <p className="text-gray-600 text-sm">
                I can develop the site from scratch and consult you during the job.
              </p>
            </div>

            {/* Maintenance */}
            <div className="md:col-span-2 text-center mt-10">
              <h3 className="text-sm font-bold tracking-widest mb-2">MAINTENANCE</h3>
              <p className="text-gray-600 text-sm max-w-lg mx-auto">
                I can maintain and update the site based on your needs and feedback.
              </p>
            </div>
          </div>

          {/* Divider Bottom */}
          <div className="my-12">
            <span className="inline-block w-20 h-px bg-black"></span>
            <span className="mx-2">⋯⋯⋯</span>
            <span className="inline-block w-20 h-px bg-black"></span>
          </div>
        </section>

        <section className="w-full bg-gradient-to-b from-[#e6e6e6] to-[#f5f5f5] py-20 px-6 text-center">
          <h2 className="inline-block border-2 border-black px-10 py-2 text-lg tracking-widest font-semibold mb-12">
            SKILLS
          </h2>

          {/* Using Now */}
          <div className="mb-12">
            <h3 className="text-left font-semibold text-sm uppercase mb-4 tracking-widest">Using Now:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
              {skillsData.usingNow.map((skill, i) => (
                <div key={i} className="flex flex-col items-center space-y-2">
                  <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                  <span className="text-xs font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </section>

        <section>
          <div className="container mx-auto mb-44 px-5 xl:px-14">
            <h1
              className="text-gray-400 md:text-[108px] text-[48px] uppercase font-black ml-5 mb-10 text-center md:text-left"
            >
              projects
            </h1>

            {projectsData.map((project, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-7 flex-col md:flex-row overflow-hidden rounded-[8px] py-20 md:py-5 bg-gray-500 md:px-5 -space-x-16"
              >
                <div className="relative">
                  <h1 className="text-2xl md:text-4xl font-bold text-white mb-[40px] text-center md:text-left">
                    {project.title}
                  </h1>
                  {/* <p className="text-[10px] md:text-xs xl:text-base font-medium text-white md:mb-10 mb-0 text-center md:text-left">
                    {project.description}
                  </p> */}
                  <button className="relative top-44 md:top-0 rounded-md xl:w-[150px] bg-white text-blue-600 py-2 uppercase text-xs w-full font-bold shadow-lg drop-shadow-[0_5px_20px_rgba(0,112,244,0.8)] hover:bg-slate-300">
                    viewProjects
                  </button>
                </div>

                <div className="flex items-center gap-0 overflow-hidden -space-x-14 md:-space-x-36">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div
                      key={i}
                      onClick={() => handleNavigate(t(project.title))}
                      className="relative w-full md:h-[198px] left-20 shadow-lg rounded-[20px] transition-transform duration-300 cursor-pointer hover:translate-x-6 group"
                    >
                      <img
                        src={KranPortfolio}
                        className="md:h-full h-28 w-full object-cover rounded-[20px]"
                        alt={`${project.title} ${i}`}
                      />
                      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 rounded-[20px]"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </section>

        <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-20 px-6">
          <div className="text-center mb-16">
            <h2 className="inline-block border-2 border-black px-10 py-2 text-lg tracking-widest font-bold">
              TESTIMONIALS
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Hamkasblarimning men haqimdagi fikrlari
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {testimonials.map((person, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition duration-300 p-8 text-center transform hover:-translate-y-2 hover:scale-105"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{person.name}</h4>

                {/* Yulduzlar */}
                <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                  {[...Array(person.rating)].map((_, idx) => (
                    <FaStar key={idx} className="transition transform hover:scale-125" />
                  ))}
                </div>

                {/* Fikr */}
                <p className="text-gray-600 text-sm leading-relaxed">{person.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center py-20 px-4"
        >
          <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Get in Touch
            </h2>
            <p className="text-center text-gray-500 mb-10">
              I'd love to hear from you! Fill out the form below and I'll get back to you soon.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>


      </main>
      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        {/* Back to Top button */}
        <div className="mb-6">
          <button
            onClick={scrollToTop}
            className="bg-white text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-200 transition"
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>

        {/* Social media links */}
        <div className="flex justify-center gap-6 text-xl mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <FaInstagram />
          </a>
        </div>

        <hr />

        {/* Copyright */}
        <p className="text-sm text-gray-400 pt-5">
          © 2020 Aripov Bekmuhammad. All Rights Reserved.
        </p>
      </footer>

    </>
  );
};

export default App;