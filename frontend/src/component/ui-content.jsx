import '../sass/global.scss';
import '../sass/ui-content.scss';
import test from '../assets/stacked-peaks-haikei.svg';

function Card(){

    return (
        <div className="uiCard">
            <div className="main">
                <img src={test} alt="" />
                <b>Web Design</b>
            </div>
            <div className="ui-info">
                <div className="left">
                    <img src={test} alt="" />
                </div>
                <div className="right">
                    <b>@senyuman.id</b>
                    <p>UI/UX Designer</p>
                </div>
            </div>
        </div>
    );

}

export function UiContent(){

    return (
        <div className="ui-content">
            <hr/>
            <div className="header">
                <h1>
                    Discover Designs For You
                </h1>
                <p>
                    Design is faster and easier to use
                </p>
            </div>
            <div className="ui-main-content">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );

}