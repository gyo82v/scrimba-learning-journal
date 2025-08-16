import {data} from "../data"
import Post from "../components/Post"
import Desc from "../components/Desc"
import avatar from "../images/avatar.png"

export default function AboutMe(){
    const container = `px-5 mt-4`
    const img = `rounded-full w-48 h-48 shadow-lg shadow-neutral-800/30 `
    const title = `text-2xl font-bold my-4`
    const subTitle = `text-center font-bold text-lg mt-14 mb-6`

    const postArray = data.slice(0, 3).map(d => <Post key={d.id} data={d} />)

    return(
        <div className={container}>
            <section>
                <img src={avatar} className={img} alt="avatar" />
                <h2 className={title}>Hi there! My name is Roku and welcome to my learning journal.</h2>
                <p className="mb-10">After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
                 <Desc />
            </section>
            <section>
                <h3 className={subTitle}>Recent posts</h3>
                {postArray}
            </section>
        </div>
    )
}