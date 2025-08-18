import {data} from "../data"
import articleImg from "../images/article-img.webp"
import Post from "../components/Post"
import Desc from "../components/Desc"
import Nav from "../components/Nav"

export default function Article({open}){
    const img = `my-8 rounded-sm w-full h-90 md:h-[30rem]`
    const subTitle = `text-center font-bold text-lg mt-14 mb-6`

    const postArray = data.slice(0,3).map(d => <Post key={d.id} data={d} /> )

    return(
        <div className="px-5 mt-10">
            <section>
                <p className="text-sm ml-5 md:px-10 md:ml-0">JULY 23, 2022</p>
                <h2 className="text-2xl font-bold my-4 md:px-10">My new journey as a bootcamp student.</h2>
                <p className="my-4 md:px-10">
                    After several months of learning in the Frontend Developer Career Path,
                    I've made the big jump over to the Bootcamp to get expert code reviews
                    of my Solo Projects projects and meet like-minded peers.
                </p>
                <img 
                  src={articleImg} 
                  alt="a laptop in front of an open window and a city in the background at night" 
                  className={img} 
                />
                <Desc padding="px-10"/>
            </section>
            <section>
                <h3 className={subTitle}>Recent posts</h3>
                  <div className="md:grid md:grid-cols-3">
                     {postArray}
                  </div>
            </section>
        </div>
    )
}