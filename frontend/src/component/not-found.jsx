import '../sass/global.scss';
import '../sass/not-found.scss';
export function NotFoundPage(){
    return (
        <div className="not-found">
            <h1>Sorry</h1>
            <h3>the page you are looking for isn't found on our server</h3>
            <a href="/">Back To Home</a>
        </div>
    );
}