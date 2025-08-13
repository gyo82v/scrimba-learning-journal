import {Link} from "react-router-dom"
import articleImg from "../images/article-img.webp"
import Post from "../components/Post"
import {data} from "../data"

export default function Home(){
    const container = ``
    const section1 = `text-neutral-200 px-5 pb-6 pt-20 bg-cover bg-center mb-6`
    const date = `text-sm`
    const title = `text-2xl font-bold my-3`
    const sectionPosts = `px-5 flex-col gap-10`
    
    const postArray = data.map(p => (
        <Post key={p.id} data={p} />
    ))
    return(
        <div className={container}>
            <Link to="/article">
            <section style={{backgroundImage: `url(${articleImg})`}} className={section1}>
                <p className={date}>JULY 23, 2022</p>
                <h2 className={title}>My new journey as a bootcamp student.</h2>
                <p>
                    After several months of learning in the Frontend Developer
                    Career Path, I've made the big jump over to the Bootcamp to
                    get expert code reviews of my Solo Projects projects and meet
                    like-minded peers.
                </p>
            </section>
            </Link>
            <section className={sectionPosts}>
               {postArray}
            </section>
        </div>
    )
}