import { Footer } from './component/footer';
import { Header } from './component/header';
import { HomeProduct } from './component/homeProducts';
import { Info } from './component/info';
import { Main } from './component/main';
import { Navbar } from './component/nav';
import { Testimonials } from './component/testimonials';
import './sass/home.scss';

export function App() {

  return (
    <>
      <Navbar />
      <Header />
      <div className='saparator'>
        <span>
          LOGO AGENCY • WEB DEVELOPER • UI & UX DESIGNER • LOGO DESIGN • WEB DESIGN
        </span>
      </div>
      <Main />
      <Info />
      <HomeProduct />
      <Testimonials />
      <Footer />
    </>
  );

}