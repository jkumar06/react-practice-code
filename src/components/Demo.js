import React,{useState} from "react";

const Demo = () => {
    const [text,setText] = useState("");
    const [isDark,setIsDark] = useState(false);

    console.log("Rendering!!!")

    return(
        <div className={
            "m-4 p-2 w-96 h-96 border border-black" + 
        (isDark && "bg-gray-900 text-white")
        }>
        <div>
            <button 
            className="m-10 p-2 bg-gren-200"
            onClick={()=> setIsDark(!isDark)}>
            Toggle
            </button>
        </div>
            <div>
                <input className="border border-black w-72 px-2"
                        type="text"
                       value={text}
                       onChange = {(e) => setText(e.target.value)}
                />
            </div>

        </div>
    )
}
export default Demo;