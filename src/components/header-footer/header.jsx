import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Header({setOpen, open}){
    const header = `flex py-4 px-4 text-neutral-700`
    const link = `ml-6 font-semibold text-sm`
    const iconContainer = `sm:hidden flex justify-center items-center`
    const icon = `transform hover:scale-105 active:scale-90 h-5 w-5 mr-2`
    return(
        <header className={header}>
            <h1 className="font-bold text-xl mr-auto">My learning journal</h1>
            <nav className="hidden sm:flex">
                <NavLink to="/" className={link}>HOME</NavLink>
                <NavLink to="/aboutMe" className={link}>ABOUT ME</NavLink>
            </nav>
            <div className={iconContainer}>
                <button onClick={setOpen} disabled={open}><FaBars className={icon} /></button>
            </div>
        </header>
    )
}