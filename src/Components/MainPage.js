import { useEffect, useRef, useState } from "react";
import { handleApi } from "../API/handleAPI";
import CareerSoFar from "./CareerSoFar";
import Exps from "./Exps";
import MainContent from "./MainContent";
import Projects from "./Projects";
import TopBar from "./TopBar";

export default function MainPage(props) {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [content, setContent] = useState([]);

  const projectRef = useRef(null);
  const expsRef = useRef(null);
  useEffect(() => {
    handleApi().then((val) => {
        //set Projects
        console.log(val)
        setProjects((val.data.data.values)[0])
    });
  }, []); 

  // run this function from an event handler or an effect to execute scroll

  return (
    <div>
      <TopBar refs={[projectRef, expsRef]} />

      <div class="h-screen bg-gray-900">
        <MainContent />
      </div>

      <CareerSoFar />
      <div ref={projectRef}>
        <Projects data = {projects}/>
      </div>
      <Exps />
    </div>
  );
}
