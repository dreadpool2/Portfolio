import dp from "../Assets/Images/dp.jpg"
import "../styles/app.css"

export default function CareerSoFar(props) {
    let chipmap =[
        'UI',
        'Mongo Db',
        'Kotlin',
        'React JS',
        'Node JS',
        'Express',
        'Flutter'
    ]  

    return (
        <div class="border-white text-white flex justify-center items-center h-screen flex-row " style={{border:"1px solid red"}}>
               
            <div class="border-white text-black flex w-2/6 justify-center items-start flex-col px-5 ">
                <span class="font-medium text-4xl py-2">My Career So Far<span class="animate-pulse">&nbsp;_</span></span>
                <span class="font-medium text-1xl">Always up for a challenge. I have worked for startups and companies where I have always learned something new along the way and have always given my hundred percent to whatever the work might be</span>
            </div>
            <div class="border-white text-black flex w-2/6 justify-center items-center flex-wrap "> 
                {chipmap.map((val) => <div class="chip px-4 py-4 m-1.5">{val.toUpperCase()}</div>)} 
            </div>
        </div>
    )
}