import react from 'react';
import image from "../bk2.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="Bk Image" className="absolute object-cover w-full h-full"/>
            <section className="relative flex min-h-screen pt-8 lg:pt-10 px-8">
                <h1 className="text-6xl text-green-500 font-bold cursive leading-none lg:leading-snug  home-name">Hii. I'm Rakesh</h1>
            </section>
        </main>
    )
}