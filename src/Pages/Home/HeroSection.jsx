
export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I am David!</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Junior Front</span>{" "}
                        <br />
                        End Developer
                    </h1>
                    <p className="hero--section-description">
                        15 Years Old Front-end Developer.
                        <br />
                        Study In GOA Academy As Student 
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/Facebook.jpg" alt="Hero Section" />
            </div>
        </section>
    )
}