import { useState } from 'react';
import '../sass/global.scss';
import '../sass/main.scss';
import { MainCard } from './main-card';
import Vector from '../assets/icon/Vector.png';
import Web from '../assets/icon/18816786611539683261 1 (1).png';
import Idea from '../assets/icon/9097231501639568157 1.png';


export function Main() {

    const [offer,setOffer] = useState([
        {
            img: Vector,
            title: 'UI&UX Design',
            description: `We make UI designs for websites and mobile with a minimalist & modern look 
            for your project needs`
        },
        {
            img: Web,
            title: 'Web Development',
            description: `We make UI designs for websites and mobile with a minimalist & modern look 
            for your project needs`
        },
        {
            img: Web,
            title: 'Web Designer',
            description: `We make UI designs for websites and mobile with a minimalist & modern look 
            for your project needs`
        },
        {
            img: Idea,
            title: 'Logo Design',
            description: `We make UI designs for websites and mobile with a minimalist & modern look 
            for your project needs`
        }
    ]);

    return (
        <main>
            <h1>Our Services For You</h1>
            <h4>We provide the best service with an experienced team in
                their field to serve you wholeheartedly</h4>
            <div className="offering">
                {
                    offer.map( ({img,description,title},i) =>{
                        return <MainCard key={i} img={img} title={title} description={description} />       
                    })
                }
            </div>
        </main>
    );
}