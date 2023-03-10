import "./portfolio.css"
import img1 from "assets/Projects İmages/getir.png"
import img2 from "assets/Projects İmages/erdemyuksel.png"
import img3 from "assets/Projects İmages/Berber.png"
import img4 from "assets/Projects İmages/Spotify.png"
import img5 from "assets/Projects İmages/Brand-Colors.png"
import img6 from "assets/Projects İmages/Pokedex.png"
import img7 from "assets/Projects İmages/ecommerce.png"
import img8 from "assets/Projects İmages/todoapp.png"
import { useSelector } from "react-redux"
const Portfolio = () => {

    const { language } = useSelector(state => state.languageReducer)

    return (
        <>
            {
                language === "tr" ?
                    <section id="portfolio" >
                        <h5>Yaptığım Bazı Çalışmalar</h5>
                        <h2>Projelerim</h2>

                        <div className="container portfolio-container">


                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img7} alt="" />
                                </div>
                                <h3>Ecommerce React-Firebase Website</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/react-redux-firebase-ecommerce">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/react-redux-firebase-ecommerce/">Demo İçin Tıklayın </a>
                                </div>

                            </article>



                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img1} alt="" />
                                </div>
                                <h3>Getir.com React-Tailwind Klonu</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/getir-react-tailwind-clone">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/getir-react-tailwind-clone/">Demo İçin Tıklayın </a>
                                </div>

                            </article>
                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img2} alt="" />
                                </div>
                                <h3>Erdem Yüksel Metal React Website</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/erdem-yuksel-metal-react">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/erdem-yuksel-metal-react/">Demo İçin Tıklayın </a>
                                </div>

                            </article>
                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img3} alt="" />
                                </div>
                                <h3>HTML-CSS-JS Beber Örnek Website</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/html-css-js-projects/tree/main/Html-Css-Js%20WebSite%20Project/10%20-%20Barber%20Website%20%2BJs">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/html-css-js-projects/Html-Css-Js%20WebSite%20Project/10%20-%20Barber%20Website%20%2BJs/index.html">Demo İçin Tıklayın </a>
                                </div>

                            </article>
                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img4} alt="" />
                                </div>
                                <h3>Spotify React-Tailwind Klon( Mobil Desteklemiyor)</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/react-tailwind-spotify-clone">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/react-tailwind-spotify-clone/">Demo İçin Tıklayın </a>
                                </div>

                            </article>
                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img5} alt="" />
                                </div>
                                <h3>BrandColors React-Tailwind Klon (Mobil Desteklemiyor)</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/react-brandcolors-projects">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/react-brandcolors-projects/">Demo İçin Tıklayın </a>
                                </div>

                            </article>




                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img8} alt="" />
                                </div>
                                <h3>React Redux Todo App</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/react-redux-thunk-todo-app">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://react-redux-thunk-todo.netlify.app/">Live Demo </a>
                                </div>

                            </article>



                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img6} alt="" />
                                </div>
                                <h3>Vanilla Js Pokemon Api Pokedex</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/html-css-js-projects/tree/main/JavaScript%20Project/11%20-%20Pokedex">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/html-css-js-projects/JavaScript%20Project/11%20-%20Pokedex/index.html">Live Demo </a>
                                </div>

                            </article>




                        </div>

                    </section>
                    :
                    <section id="portfolio" >
                        <h5>Some of the Work I Have Done</h5>
                        <h2>Projects</h2>

                        <div className="container portfolio-container">


                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img7} alt="" />
                                </div>
                                <h3>Ecommerce React-Firebase Website</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/react-redux-firebase-ecommerce">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/react-redux-firebase-ecommerce/">Demo İçin Tıklayın </a>
                                </div>

                            </article>

                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img1} alt="" />
                                </div>
                                <h3>Getir.com React-Tailwind Clone</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/getir-react-tailwind-clone">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/getir-react-tailwind-clone/">Live Demo </a>
                                </div>

                            </article>
                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img2} alt="" />
                                </div>
                                <h3>Erdem Yüksel Metal React Website</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/erdem-yuksel-metal-react">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/erdem-yuksel-metal-react/">Live Demo </a>
                                </div>

                            </article>
                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img3} alt="" />
                                </div>
                                <h3>HTML-CSS-JS Sample Website for Barber</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/html-css-js-projects/tree/main/Html-Css-Js%20WebSite%20Project/10%20-%20Barber%20Website%20%2BJs">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/html-css-js-projects/Html-Css-Js%20WebSite%20Project/10%20-%20Barber%20Website%20%2BJs/index.html">Live Demo </a>
                                </div>

                            </article>
                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img4} alt="" />
                                </div>
                                <h3>Spotify React-Tailwind Clone(Mobile Not Supported)</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/react-tailwind-spotify-clone">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/react-tailwind-spotify-clone/">Live Demo </a>
                                </div>

                            </article>
                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img5} alt="" />
                                </div>
                                <h3>BrandColors React-Tailwind Clone (Mobile Not Supported)</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/react-brandcolors-projects">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/react-brandcolors-projects/">Live Demo </a>
                                </div>

                            </article>


                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img8} alt="" />
                                </div>
                                <h3>React Redux Todo App</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/react-redux-thunk-todo-app">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://react-redux-thunk-todo.netlify.app/">Live Demo </a>
                                </div>

                            </article>



                            <article className="portfolio-item">
                                <div className="portfolio-item-image">
                                    <img src={img6} alt="" />
                                </div>
                                <h3>Vanilla Js Pokemon Api Pokedex</h3>
                                <div className="portfolio-item-cta">
                                    <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/atifsimsek/html-css-js-projects/tree/main/JavaScript%20Project/11%20-%20Pokedex">Github </a>
                                    <a className="btn btn-primary" target="_blank" rel="noreferrer" href="https://atifsimsek.github.io/html-css-js-projects/JavaScript%20Project/11%20-%20Pokedex/index.html">Live Demo </a>
                                </div>

                            </article>
                        </div>

                    </section>

            }
        </>
    )
}

export default Portfolio