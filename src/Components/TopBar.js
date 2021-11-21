export default function TopBar(props) {

    return (
        <div class="fixed w-full flex space-x-4 px-4 py-4  bg-gray-900 text-white" >
            <div class="py-2 font-bold bg-white px-4 text-black rounded-full font-serif text flex">
                S
            </div>
            <div class="flex-1 py-2 font-extralight">
                Sanyog Ghosh
            </div>
            <div class="grid py-2 font-semibold sm:w-auto w-1 sm:visible invisible">
                Skills
            </div>
            <div class="grid py-2 sm:w-auto w-1 sm:visible invisible cursor-pointer" onClick={() => {
                    props.refs[0].current.scrollIntoView()
            }}>
                Projects
            </div>
            <div class="grid py-2 sm:w-auto w-1 sm:visible invisible">
                Contact
            </div>
            <div class="font-medium flex" style={{ justifyContent: "flex-end" }}>
                <div class="rounded shadow-md py-2 bg-white text-black flex" style={{ width: "180px", justifyContent: "center", alignItems: "center" }}  >            Download Resume
                </div>
            </div>
        </div>
    )
}