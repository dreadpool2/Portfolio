import dp from "../Assets/Images/dp.jpg";
import "../styles/app.css";
import ProjectComponent from "./ProjectComponent";

export default function Projects(props) {
  let projects = props.data || [];
  console.log(projects);

  return (
    <div class="flex justify-center items-center h-screen flex-col">
      <div class="px-4 font-bold text-3xl"> Projects<span class="animate-pulse">&nbsp;_</span></div>
      <div
        class="border-white text-white flex  items-center px-4 py-4 flex-row flex-wrap "
        style={{ border: "1px solid red" }}
      >
        {projects
          .filter((val, idx) => idx != 0)
          .map((val) => {
            let arr = val.split(",");
            let tagArr = arr[1].split(";");
            arr[1] = tagArr;
            return <ProjectComponent data={arr} />;
          })}
      </div>
    </div>
  );
}
