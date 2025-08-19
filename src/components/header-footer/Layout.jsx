import {Outlet} from "react-router-dom"
import Header from "./header";
import Footer from "./Footer";

export default function Layout({setOpen, open}){
    return(
        <>
           <Header setOpen={setOpen} open={open} />
             <main className="flex-1 flex flex-col">
              <Outlet />
             </main>
           <Footer />
        </>
    )
}