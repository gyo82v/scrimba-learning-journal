import {data} from "../data"
import Post from "../components/Post"
import Desc from "../components/Desc"
import avatar from "../images/avatar.png"
import Nav from "../components/Nav"

export default function AboutMe({open, setOpen}){
    const img = `rounded-full w-48 h-48 shadow-lg shadow-neutral-800/30 `
    const subTitle = `text-center font-bold text-lg mt-14 mb-6`

    const postArray = data.slice(0, 3).map(d => <Post key={d.id} data={d} />)

    return(
        <div className="px-5 mt-4">
            <section>
                <div className="flex flex-col md:flex-row md:items-center md:gap-4 md:my-10">
                  <img src={avatar} className={img} alt="avatar" />
                  <div>
                    <h2 className="text-2xl font-bold my-4">
                      Hi there! My name is Roku and welcome to my learning journal.
                    </h2>
                    <p className="mb-10">
                      After several months of learning in the Frontend Developer Career Path,
                      I've made the big jump over to the Bootcamp to get expert code reviews
                      of my Solo Projects projects and meet like-minded peers.
                    </p>
                  </div>
                </div> 
                <Desc padding="md:px-10" />
            </section>
            <section>
                <h3 className={subTitle}>Recent posts</h3>
                  <div className="md:grid grid-cols-3">
                     {postArray}
                  </div>
            </section>
            {open && <Nav setOpen={setOpen} />}
        </div>
    )
}