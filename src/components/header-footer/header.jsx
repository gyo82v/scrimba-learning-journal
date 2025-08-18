import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.webp"

export default function Header(){
    const header = `flex py-4 px-4`
    const div = `flex items-center mr-auto`
    const nav = ``
    const img = `h-6 w-6`
    const h1 = `font-bold mb-1`
    const link = `ml-6 font-semibold text-sm`
    return(
        <header className={header}>
            <div className={div}>
                <img src={logo} alt="logo" className={img} />
                <h1 className={h1}>My learning journal</h1>
            </div>
            <nav className={nav}>
                <NavLink to="/" className={link}>HOME</NavLink>
                <NavLink to="/aboutMe" className={link}>ABOUT ME</NavLink>
            </nav>
        </header>
    )
}