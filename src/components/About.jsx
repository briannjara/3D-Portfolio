import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ title, index, icon }) => {
    return (
 
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='xs:w-[250px] w-full'
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
          <div
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img 
              src={icon} 
              alt={`${title} icon`}
              className='w-16 h-16 object-contain'
            />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
      
    )
}

const About = () => {
  return (
    
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a skilled web developer, I excel in both front-end and back-end technologies, crafting dynamic and responsive websites. Proficient in HTML, CSS, and JavaScript, alongside frameworks like React and Angular, I also utilize back-end languages such as Node.js and Python to create robust applications. My passion for coding keeps me updated with industry trends, ensuring my work is functional and visually appealing. With a keen eye for detail and a commitment to clean code, I enjoy solving complex problems and delivering high-quality solutions. I value collaboration and thrive in diverse teams, where I can share my expertise while learning from my peers.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
   
  )
}

export default SectionWrapper(About, "about");