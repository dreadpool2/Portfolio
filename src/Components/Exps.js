import dp from "../Assets/Images/dp.jpg"
import "../styles/app.css"
import { GASClient } from 'gas-client';
import { useEffect } from "react";
import { loadAuth2, loadAuth2WithProps, loadClientAuth2 } from 'gapi-script';



export default function Exps(props) {
    useEffect(() => {
        
    }, [])
    let chipmap = [
        'UI',
        'Mongo Db',
        'Kotlin',
        'React JS',
        'Node JS',
        'Express',
        'Flutter'
    ]

    return (
        <div class="border-white text-white flex justify-center items-center h-screen flex-row " style={{ border: "1px solid red" }}>


            <div class="border-white text-black flex w-2/6 justify-center items-center flex-wrap ">
                {chipmap.map((val) => <div class="chip px-4 py-4">{val.toUpperCase()}</div>)}
            </div>
        </div>
    )
}