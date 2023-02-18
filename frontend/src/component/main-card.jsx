import '../sass/global.scss';
import '../sass/main-card.scss';

export function MainCard({img,title,description}){
    return (
        <div className="main-card">
            <img src={img} alt="" />
            <b>{title}</b>
            <p>
                {description}
            </p>
        </div>
    );
}