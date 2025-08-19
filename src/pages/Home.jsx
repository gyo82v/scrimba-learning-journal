import {Link} from "react-router-dom"
import articleImg from "../images/article-img.webp"
import Post from "../components/Post"
import Nav from "../components/Nav"
import {data} from "../data"

export default function Home({open, setOpen}){
    const section1 = `text-neutral-200 bg-cover bg-center mb-6 p-4
                       h-90 relative`
    const sectionPosts = `px-5 flex-col gap-10 md:grid md:grid-cols-3`
    const div = `absolute bottom-4 md:bottom-10 md:left-6`
    
    const postArray = data.map(p => (
        <Post key={p.id} data={p} />
    ))

    return(
        <div>
            <Link to="/article">
              <section style={{backgroundImage: `url(${articleImg})`}} className={section1}>
                  <div className={div}>
                    <p className="text-sm">JULY 23, 2022</p>
                    <h2 className="text-2xl font-bold my-3">My new journey as a bootcamp student.</h2>
                    <p className="w-11/12 lg:w-1/2">
                        After several months of learning in the Frontend Developer
                        Career Path, I've made the big jump over to the Bootcamp to
                        get expert code reviews of my Solo Projects projects and meet
                        like-minded peers.
                    </p>
                  </div>
              </section>
            </Link>
            <section className={sectionPosts}>
               {postArray}
            </section>
            {open && <Nav setOpen={setOpen} />}
        </div>
    )
}