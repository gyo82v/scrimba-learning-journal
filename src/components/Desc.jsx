export default function Desc({padding}){
    return(
        <section className={padding || ""}>
            <h3 className="font-bold text-lg">How I stay committed to learning</h3>
                <p className="my-4">
                    <span className="block mb-2">I like to think of myself as a lifelong learner. I used to spend hours
                    and hours learning, then try to create simple projects using what I
                    learned or work new techniques into existing projects.</span>
                    While that was fun, I felt like it would be helpful to share what I was
                    learning and most things about my journey with the world.
                </p>
                <h3 className="font-bold text-lg">How I got started</h3>
                <p className="my-4">
                    <span className="block mb-2">I started simple and gradually grew my learning journal site. I would take
                    notes about what I was learning. After each learning session, I'd use my
                    notes to not only reflect on what I learned but also write short summaries
                    of what I learned using my own words.</span>
                    That helped me grok what I was learning, and I realized that posting my learning
                    summaries was also helping others learn and stay motivated.
                </p>
        </section>
    )
}