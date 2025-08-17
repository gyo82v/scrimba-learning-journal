export default function Post({data}){
    const {alt, img, title, description, date} = data
    const article = `flex flex-col gap-3 shadow-lg shadow-neutral-500/30 p-3 rounded-lg mb-5`
    const imgStl = ``
    const dateStl = `font-semibold`
    const titlestl = `text-2xl font-bold`
    const descStl = ``

    return(
        <article className={article}>
            <img src={img} alt={alt} className={imgStl} />
            <p className={dateStl}>{date}</p>
            <h3 className={titlestl}>{title}</h3>
            <p className={descStl}>{description}</p>
        </article>
    )
}