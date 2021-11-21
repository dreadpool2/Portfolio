import dp from "../Assets/Images/dp.jpg"
import "../styles/app.css"
export default function MainContent(props) {

    return (
        <div class="border-white text-white flex h-5/6 justify-center items-center flex-row" >
            <img class="filter hue-rotate-180 invert mix-blend-normal rounded-full border-dashed border-4 border-light-blue-500" src={dp}/>
            <div class="border-white text-white flex h-5/6 justify-center items-start flex-col px-5 ">
                <span class="font-medium text-4xl py-2">Hey!</span>
                <span class="font-medium text-3xl py-2">This is Sanyog</span>
                <span class="font-medium text-1xl">I am a Full Stack Web Developer and an Mobile App Developer </span>
                <span class="font-medium text-1xl">who has recently graduated from BITS Goa</span>
                <span class="font-medium text-1xl py-4">Welcome to my Portfolio! </span>
            </div>
        </div>
    )
}