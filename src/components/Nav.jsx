import { Link } from "react-router-dom"
import { FiX } from "react-icons/fi";         

export default function Nav({setOpen}){
    const container = `fixed top-2 bottom-2 left-2 right-2 
                       bg-gradient-to-b from-neutral-400 via-neutral-300 to-neutral-400
                       flex flex-col`
    const nav = `flex flex-col items-center justify-center text-2xl font-semibold 
                 mx-auto mt-40 gap-30`
    const link = ``
    const btn = `absolute top-3 right-3`
    return(
        <nav className={container}>
            <button onClick={setOpen} className={btn}><FiX /></button>
            <nav className={nav}>
                <Link to="/" className={link} onClick={setOpen}>Home</Link>
                <Link to="/article" className={link} onClick={setOpen}>Article</Link>
                <Link to="/aboutMe" className={link} onClick={setOpen}>AboutMe</Link>
            </nav>
        </nav>
    )
}