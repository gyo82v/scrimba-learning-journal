export default function Footer(){
    const footer = `text-center bg-neutral-800 py-8`
    const title = `text-neutral-200 font-bold`
    const copyright = `text-neutral-400`
    return(
        <footer className={footer}>
            <p className={title}>My learning journal</p>
            <p className={copyright}>Copyright@2025</p>
        </footer>
    )
}