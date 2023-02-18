import { useState } from 'react';
import '../sass/homeProduct.scss'
import pt8 from '../assets/UI Design/portfolio-8.png';
import pt7 from '../assets/UI Design/portfolio-7.png';


function Product({ img, title, description, action }) {
    return (
        <div className='card'>
            <img src={img} alt={title} />
            <div className='detail'>
                <b>{title}</b>
                <div>
                    <p>{description}</p>
                    <a href={action}>View Project</a>
                </div>
            </div>
        </div>
    );
}

export function HomeProduct() {

    const [products, setProducts] = useState([
        {
            img: pt8,
            description: 'We Create education for Mobile Apps with a minimalist & modern look with figma...',
            title: 'Education- Mobile Apps...',
            action: '',
        },
        {
            img: pt7,
            description: 'We Create education for Mobile Apps with a minimalist & modern look with figma...',
            title: 'Education- Mobile Apps...',
            action: '',
        }
    ]);

    return (
        <section className="home-product">
            <h1>Some of our newest creations</h1>
            <div className="products">
                {
                    products.map(({ img, title, description, action }, i) => {
                        return <Product key={i} img={img} title={title} description={description} action={action} />
                    })
                }
            </div>
        </section>
    );

}