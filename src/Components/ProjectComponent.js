import dp from "../Assets/Images/dp.jpg";
import "../styles/app.css";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function ProjectComponent(props) {
  let  projectName, tags, description, date, language;
  [projectName, tags, description, date, language] = props.data

  console.log(projectName)
  return (
    <div class="shadow-md text-black px-4 py-4 rounded-md xl:w-3/6 sm:w-4/6">
      <div class ="font-bold pb-4 text-xl">{projectName}</div>
      <div class="flex  pb-4">
        {tags.map((val) => (
          <div class="chip px-4 mr-1.5 text-sm"> {val}</div>
        ))}
      </div>
      <div class="text-sm text-gray-500 pb-8 font-semibold">
          {description}
      </div>
      <div class="grid grid-cols-2">
            <div class="flex-row text-gray-500">
                <CalendarTodayIcon />
                &nbsp;&nbsp;{date}
            </div> 
            <div class="grid flex justify-items-end">{language}</div>

      </div> 
  
    </div>
  );
}
