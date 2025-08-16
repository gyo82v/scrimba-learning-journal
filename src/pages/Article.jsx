import {data} from "../data"
import articleImg from "../images/article-img.webp"
import Post from "../components/Post"
import Desc from "../components/Desc"

export default function Article(){
    const container = `px-5 mt-4`
    const date = `text-sm ml-5`
    const title = `text-2xl font-bold my-4`
    const description = `my-4`
    const img = `my-8 rounded-sm`
    const subTitle = `text-center font-bold text-lg mt-14 mb-6`

    const postArray = data.slice(0,3).map(d =>(
        <Post key={d.id} data={d} />
    ) )
    return(
        <div className={container}>
            <section>
                <p className={date}>JULY 23, 2022</p>
                <h2 className={title}>My new journey as a bootcamp student.</h2>
                <p className={description}>
                    After several months of learning in the Frontend Developer Career Path,
                    I've made the big jump over to the Bootcamp to get expert code reviews
                    of my Solo Projects projects and meet like-minded peers.
                </p>
                <img 
                  src={articleImg} 
                  alt="a laptop in front of an open window and a city in the background at night" 
                  className={img} 
                />
                <Desc />
            </section>
            <section>
                <h3 className={subTitle}>Recent posts</h3>
                   {postArray}
            </section>
        </div>
    )
}