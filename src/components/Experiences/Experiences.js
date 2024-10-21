import Experience from "./Experience";

function Experiences() {
    return (
        <section className="experience" id="experiences">
            <div className="row">
                <h2>Previous experience</h2>
                <div className="info__container">
                    <Experience company="LatinArte"
                                description="Worked as a Software Developer for LatinArte. Updated their existing WordPress website and developed a mobile eshop."
                                url="https://latinarte.ca/"
                                logo="/images/logos/latinarte.png" />
                    <Experience company="Aplus"
                                description="Developed a full-stack website using React and Node.js. Used AWS as hosting platform. Used Google Analytics to improve website click-through rate."
                                url="https://aplustransition.com/en/"
                                logo="/images/logos/aplus.svg" />
                </div>
            </div>
        </section>
    );
}

export default Experiences;