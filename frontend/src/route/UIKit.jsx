import { Navbar } from '../component/nav';
import { UiContent } from '../component/ui-content';
import { Menu } from '../component/ui-kit-menu';
import '../sass/global.scss';
import '../sass/ui-kit.scss';

export function UIKit() {
    
    const all = [
        {
            title: "Web Design",
            amount: 70
        },
        {
            title: "Mobile Design",
            amount: 10
        },
        {
            title: "Logo Design",
            amount: 50
        }
    ];
    
    return (
        <>
        <Navbar/>
        <div className="catalog">
            <div className='header'>
                <h1>
                    USE UI KIT
                    work faster & easier
                    <br/>
                    <strong>
                        work faster & easier
                    </strong>
                </h1>
                <p>
                We provide many ready-to-use designs for your project needs, with a modern design appearance & the best quality
                </p>
            </div>
        </div>
        <Menu kind={all}/>
        <UiContent />
        <div className='content-nav'>
            <button>
                Previous
            </button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>
                Next
            </button>
        </div>
        </>
    );
}