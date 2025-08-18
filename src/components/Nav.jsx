import { Link } from "react-router-dom"
import { FiX } from "react-icons/fi";         
import { AiOutlineClose } from "react-icons/ai"; 
import { MdClose } from "react-icons/md";     
import { IoMdClose } from "react-icons/io";   

export default function Nav(){
    const container = `fixed top-10 bottom-10 left-10 right-10 
                bg-neutral-400 
                flex flex-col`
    const nav = ``
    const link = ``
    const btn = `absolute top-3 right-3`
    return(
        <nav className={container}>
            <button className={btn}><FiX /></button>
            <nav className={nav}>
                <Link to="/" className={link}>Home</Link>
                <Link to="/article" className={link}>Article</Link>
                <Link to="/aboutMe" className={link}>AboutMe</Link>
            </nav>
        </nav>
    )
}