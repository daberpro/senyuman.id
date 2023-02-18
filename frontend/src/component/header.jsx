import '../sass/global.scss';
import '../sass/header.scss';
import fb from '../assets/icon/fb.png';
import ig from '../assets/icon/ig.png';
import twitter from '../assets/icon/twitter.png';
import dribbble from '../assets/icon/dribbble.png';

export function Header(){

    return (
        <header>
            <h1 className="chant">
                We Make <strong className="higlight">Minimalist</strong> & <strong className="higlight">Beautiful</strong> Designs For You
            </h1>
            <h4>
                Experience our design team who are passionate about creating minimalist visual designs to address your business and user needs.
            </h4>
            <a className='start'>
                Start  New Project
            </a>
            <div className='social-media'>
                <a>
                  <img src={fb}/>
                </a>
                <a>
                  <img src={ig}/>
                </a>
                <a>
                  <img src={twitter}/>
                </a>
                <a>
                  <img src={dribbble}/>
                </a>
            </div>
        </header>
    );

}