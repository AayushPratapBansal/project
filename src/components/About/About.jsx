import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

 const About = () => {
  return (
    
    <section className={styles.container} id="About">
      
          
          <div className=" fixed top-15 left-20 flex  place-content-evenly  gap-6 w-2/5 bg-gray-800 bg-opacity-70 p-3 rounded-lg ">
          <a href="https://www.linkedin.com/in/aayush-pratap-bansal-200a3b2ab/" target="_blank" rel="noopener noreferrer">
            <img src="/photo/contact/linkedInIcon.png " alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" /> {/* LinkedIn Icon */}
          </a>
          <a href="https://github.com/AayushPratapBansal" target="_blank" rel="noopener noreferrer">
            <img src="/photo/contact/githubIcon.png " alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform" /> {/* GitHub Icon */}
          </a>
          <a href="https://leetcode.com/u/Aayushpratapbansal/" target="_blank" rel="noopener noreferrer">
            <img src="/photo/contact/leetcode.png" alt="LeetCode" className="w-8 h-8 hover:scale-110 transition-transform" /> {/* LeetCode Icon */}
          </a>
          <a href="mailto:Aayushpratapbansal@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/photo/contact/emailIcon.png" alt="Email" className="w-8 h-8 hover:scale-110 transition-transform" /> {/* LeetCode Icon */}
          </a>
          <a href="https://drive.google.com/drive/folders/191xpTdxgg4Q7y6VU-qXji7oSUH6wCs94" target="_blank" rel="noopener noreferrer">
            <p  className="w-8 h-8  hover:scale-110 transition-transform">   <span className="text-purple-300  font-extrabold">  Resume </span>  </p> {/* LeetCode Icon */}
          </a>
        </div>


     <div className={styles.content}>
        <div className=" about m-20  w-2/5">
               <span className=" text-purple-400 font-extrabold  text-[70px] "> About Me</span>
               <div className="text-[30px] mt-2  ">
                    <p >I have a strong background in <span className="text-yellow-200"> computer science  and love learning new skills.</span> In addition to full-stack dev, machine learning, and data viz.
                       I'm also passionate about meditation and fitness.</p>
                   <p className="mt-10">Always looking for exciting new projects to collaborate on. Let's create something awesome together! </p>
              </div> 
        </div>


        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={"/photo/about/cursorIcon.png"} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p className="mt-5">  I'm a frontend developer with experience in building responsive and optimized sites .</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={"/photo/about/serverIcon.png"} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p className="mt-5"> I have experience developing fast and optimised back-end systems and APIs .</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={"photo/about/cursorIcon.png"} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p className="mt-5"> I have designed multiple landing pages and have created design systems as well.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
 export default About;