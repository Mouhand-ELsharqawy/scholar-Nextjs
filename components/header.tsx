'use client';
import Link from 'next/link'
 
import { usePathname } from 'next/navigation';
const Header = () => {
 
  const pathname = usePathname();
    return ( 
      
        <div>
  <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    
                    <Link href="/" className="logo">
                        <h1>Scholar</h1>
                    </Link>
                  
                    {/* <div className="search-input">
                      <form id="search" action="#">
                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                        <i className="fa fa-search"></i>
                      </form>
                    </div> */}
                
                    <ul className="nav">
                      <li className="scroll-to-section"><Link href="/" className={`${pathname === '/' ? "active" : ""}`} >Home</Link></li>
                      <li className="scroll-to-section"><Link href="/service" className={`${pathname === '/service' ? "active" : ""}`} >Services</Link></li>
                      <li className="scroll-to-section"><Link href="/course" className={`${pathname === '/course' ? "active" : ""}`} >Courses</Link></li>
                      <li className="scroll-to-section"><Link href="/team" className={`${pathname === '/team' ? "active" : ""}`} >Team</Link></li>
                      <li className="scroll-to-section"><Link href="/event" className={`${pathname === '/event' ? "active" : ""}`} >Events</Link></li>
                      <li className="scroll-to-section"><Link href="/contact" className={`${pathname === '/contact' ? "active" : ""}`} >Register Now!</Link></li>
                  </ul>   
                    <Link href="/about" className='menu-trigger'>
                        <div>About</div>
                    </Link>
                   
                </nav>
            </div>
        </div>
    </div>
  </header>
  
  <div className="main-banner" >
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="owl-carousel owl-banner">
            <div className="item item-1">
              <div className="header-text">
                <div className="category">Our Courses</div>
                <h2>With Scholar Teachers, Everything Is Easier</h2>
                <p>Scholar is free CSS template designed by TemplateMo for online educational related websites. This layout is based on the famous Bootstrap v5.3.0 framework.</p>
                <div className="buttons">
                  <div className="main-button">
                    <Link href="/about">About</Link>
                  </div>
                  <div className="icon-button">
                    <Link href="#"><i className="fa fa-play"></i> What's Scholar?</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
     );
}
 
export default Header;