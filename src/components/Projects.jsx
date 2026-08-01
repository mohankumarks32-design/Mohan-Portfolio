import "./Projects.css";


function Projects(){


const projects = [

{
title:"🚀 OmniMesh AI",

description:
"AI/ML based system that converts 2D sketches into 3D mesh models with AR/VR visualization and OBJ/STL export.",

tech:
"Python, AI/ML, Computer Vision, React",

github:"#"

},


{
title:"🤖 SmartHire AI",

description:
"AI-powered recruitment platform that analyzes resumes, matches skills with job requirements and helps recruiters find suitable candidates.",

tech:
"Java, Spring Boot, React, MySQL, Machine Learning",

github:"#"

},


{
title:"☕ Java Developer Projects",

description:
"Collection of Java applications demonstrating OOP concepts, database connectivity and backend development.",

tech:
"Java, JDBC, SQL, Data Structures",

github:"#"

}

];



return(


<section className="projects" id="projects">


<h2>
My Projects
</h2>



<div className="project-container">


{
projects.map((project,index)=>(


<div className="project-card" key={index}>


<h3>
{project.title}
</h3>


<p>
{project.description}
</p>


<h4>
Technologies:
</h4>


<span>
{project.tech}
</span>



<div>

<a href={project.github}>
GitHub
</a>


</div>


</div>


))

}



</div>


</section>


)

}


export default Projects;