import Image from "next/image";
import Head from "next/head";
const Team = () => {
    return ( 
        <div>
          <Head>
            <title> TEAM </title>
          </Head>
            <div className="team section" >
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="team-member">
            <div className="main-content">
              <Image src="/assets/images/member-01.jpg" alt="" width={75} height={100} />
              <div className="category">UX Teacher</div>
              <h4>Sophia Rose</h4>
              <ul className="social-icons">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="team-member">
            <div className="main-content">
              <Image src="/assets/images/member-02.jpg" alt="" width={75} height={100} />
              <div className="category">Graphic Teacher</div>
              <h4>Cindy Walker</h4>
              <ul className="social-icons">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="team-member">
            <div className="main-content">
              <Image src="/assets/images/member-03.jpg" alt="" width={75} height={100} />
              <div className="category">Full Stack Master</div>
              <h4>David Hutson</h4>
              <ul className="social-icons">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="team-member">
            <div className="main-content">
              <Image src="/assets/images/member-04.jpg" alt="" width={75} height={100} />
              <div className="category">Digital Animator</div>
              <h4>Stella Blair</h4>
              <ul className="social-icons">
                <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  </div>   
     );
}

export default Team;
 
