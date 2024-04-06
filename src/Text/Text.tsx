import { useContext } from "react"
import { ThemeContext } from "../App"
import "./Text.css"


const Text = () => {

    const theme = useContext(ThemeContext)
    // const textColor = theme === 'dark' ? '#FFF' : '#000'
    // const textColorClass = theme === "dark" ? "dark" : "light";

    console.log("theme", theme)
    // return <><h1 style={{ color: textColor }} className="colorText">Hello World</h1>
    //     <p className="colorText">Paragrafo</p></>
    return <>
        <h1 className={`${theme}`}>Hello World</h1>
        <p className={`${theme}`}>Paragrafo</p>
    </>
}

export default Text