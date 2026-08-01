import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import resume from "../assets/resume/Mohan_Kumar_Resume.pdf";
import mohanImage from "../assets/mohan.jpg";


function Hero(){

return(

<section className="hero" id="home">


<motion.div

className="hero-content"

initial={{opacity:0,x:-50}}

animate={{opacity:1,x:0}}

transition={{duration:1}}

>


<h1>

Hi, I'm 
<span> Mohan Kumar KS</span>

</h1>


<h2>

<TypeAnimation

sequence={[
"Java Developer",
2000,
"AI/ML Enthusiast",
2000,
"Full Stack Developer",
2000
]}

speed={50}

repeat={Infinity}

/>

</h2>


<p>

I build scalable software applications using Java,
AI technologies and modern web development.

</p>



<div className="buttons">

<a 
href={resume}
download
className="btn"
>
Download Resume
</a>


<a 
href="https://github.com/mohankumarks32-design"
className="icon">

<FaGithub/>

</a>


<a 
href="https://www.linkedin.com/in/mohan-kumar-k-s-901b9632b"
className="icon">

<FaLinkedin/>

</a>


</div>


</motion.div>



<motion.div

className="hero-image"

initial={{opacity:0,scale:0.5}}

animate={{opacity:1,scale:1}}

transition={{duration:1}}

>

<img
  src={mohanImage}
  alt="Mohan"
/>


</motion.div>



</section>

)

}


export default Hero;