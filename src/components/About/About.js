import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { about } from '../../portfolio'
import './About.css'
import img from '../../images/img.jpg'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      <div className="profile">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div>
          {name && (
            <h1>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          )}
          {role && 
          <h2 className='about__role'>A {role}.</h2>}
          <p className='about__desc'>{description && description}</p>
          <div className='about__contact center'>
            {resume && (
              <a href={resume}>
                <span type='button' className='btn btn--outline'>
                  Resume
                </span>
              </a>
            )}

            {social && (
              <>
                {social.github && (
                  <a
                    href={social.github}
                    aria-label='github'
                    className='link link--icon'
                  >
                    <FaGithub />
                  </a>
                )}

                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    aria-label='linkedin'
                    className='link link--icon'
                  >
                    <BsLinkedin />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
