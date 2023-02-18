import '../sass/global.scss';
import '../sass/footer.scss';
import fb from '../assets/icon/fb.png';
import ig from '../assets/icon/ig.png';
import twitter from '../assets/icon/twitter.png';
import dribbble from '../assets/icon/dribbble.png';
export function Footer() {
    return (
        <footer>
            <div className="menu">
                <div className='list'>
                    <h3>SenyumanID</h3>
                    <p>
                        We provide services to facilitate your business trip
                    </p>
                    <h3>Contact Info</h3>
                    <li>
                        Wonogiri, jawa tengah
                    </li>
                    <li>
                        +62 085 8661 81914
                    </li>
                    <li>
                        senyumanid@gmail.com
                    </li>
                </div>
                <div className="list">
                    <h3>Company</h3>
                    <li>Home</li>
                    <li>Service</li>
                    <li>About us</li>
                    <li>Our Work</li>
                    <li>Testimonials</li>
                </div>
                <div className="list">
                    <h3>Our Services</h3>
                    <li>UI/UX Designer</li>
                    <li>Web Designer</li>
                    <li>Web Development</li>
                    <li>Social Media Specialist</li>
                </div>
                <div className="list">
                    <h3>Instagram</h3>
                    <li>Facebook</li>
                    <li>Dribbble</li>
                    <li>Twitter</li>
                    <li>Behance</li>
                </div>
                <div className="list">
                    <h3>Support for you</h3>
                    <li>Help Center</li>
                    <li>Service For You</li>
                    <li>Project Business</li>
                    <li>FAQ & Terms</li>
                    <li>Creative Agency</li>
                </div>
            </div>
            <hr/>
            <div className="copy">
                <div className='social-media'>
                    <a>
                        <img src={fb} />
                    </a>
                    <a>
                        <img src={ig} />
                    </a>
                    <a>
                        <img src={twitter} />
                    </a>
                    <a>
                        <img src={dribbble} />
                    </a>
                </div>
                <div className="text">
                    <p>Terms Of Services</p>
                    <b>|</b>
                    <p>Privacy Policy</p>
                    <b>|</b>
                    <p>Licences</p>
                </div>

                <b className='copyright'>@senyumanid 2022 All Rights Reserved.</b>
            </div>
        </footer>
    );
}