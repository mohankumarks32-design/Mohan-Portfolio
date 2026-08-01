import "./Skills.css";

import {
  FaJava,
  FaPython,
  FaReact,
  FaDatabase
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMongodb,
  SiTensorflow
} from "react-icons/si";


function Skills(){

const skills = [

{
icon:<FaJava/>,
name:"Java"
},

{
icon:<FaPython/>,
name:"Python"
},

{
icon:<FaReact/>,
name:"React JS"
},

{
icon:<SiSpringboot/>,
name:"Spring Boot"
},

{
icon:<FaDatabase/>,
name:"SQL Database"
},

{
icon:<SiMongodb/>,
name:"MongoDB"
},

{
icon:<SiTensorflow/>,
name:"AI / Machine Learning"
},

{
name:"Data Structures & Algorithms"
}

];


return(

<section className="skills" id="skills">


<h2>
My Skills
</h2>


<div className="skill-container">


{
skills.map((skill,index)=>(

<div className="skill-card" key={index}>


<div className="skill-icon">

{skill.icon}

</div>


<h3>
{skill.name}
</h3>


</div>

))

}


</div>


</section>

)

}


export default Skills;