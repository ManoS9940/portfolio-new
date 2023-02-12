import React from 'react'

const About = () => {
  return (
    <section id='about'>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Mano Sudalaimani.
            <br className="hidden lg:inline-block" />I'm a Full Stack Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            My goal is to build high performant application and to contribute to the technology industry all that I know and can do. I'm dedicate to perfecting my skills by continuous learning from seasoned developers and continuously making strides to learn all that I can about development.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="https://docs.google.com/document/d/1sGWO-pUdOTqIc1ru5xlRVgyHdsKU9FSW/edit?usp=share_link&ouid=115584341861788868640&rtpof=true&sd=true"
              rel="noopener noreferrer nofollow" 
              target="_blank" className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Download Resume
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  )
}

export default About
