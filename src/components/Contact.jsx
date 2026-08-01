import "./Contact.css";

import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";


function Contact(){

return(

<section className="contact" id="contact">


<h2>
Contact Me
</h2>



<div className="contact-box">


<p>
I'm open to opportunities, internships and collaborations.
</p>



<div className="contact-links">


<a href="mailto:mohankumarks32@gmail.com">

<FaEnvelope/>

Email

</a>



<a href="https://github.com/mohankumarks32-design">

<FaGithub/>

GitHub

</a>



<a href="https://www.linkedin.com/in/mohan-kumar-k-s-901b9632b">

<FaLinkedin/>

LinkedIn

</a>


</div>


</div>


</section>

)

}


export default Contact;