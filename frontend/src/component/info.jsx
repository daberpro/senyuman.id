import '../sass/global.scss';
import '../sass/info.scss';
import pt from '../assets/UI Design/portfolio-7.png';

export function Info(){
    return (
        <div className="info">
            <div className="left">
                <div className="about">
                    <h1>About Us</h1>
                    <h3>WE ARE DIGITAL AGENCY SINCE 2022</h3>
                    <h1>Who We Are ?</h1>
                    <p>
                        We are an IT-based agency based in Indonesia. We are here to help you with the problems you face with our services that can be offered by UI/UX Designers, Web Development and logo Designer. We are ready to help you professionally, precisely, and quickly.
                    </p>
                </div>
                <img src={pt}/>
            </div>
            <div className="right">
                <div className="card">
                    <b>Our Vision</b>
                    <p>Be the best and keep trying in solving the various problems we face and the problems faced by everyone.</p>
                </div>
                <div className="card">
                    <b>Our Mission</b>
                    <p>We are here to help everyone who wants to grow their digital business, with the skills we have to serve clients to the fullest.</p>
                </div>
            </div>
        </div>
    );
}