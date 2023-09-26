import Image from 'next/image'
import Head from 'next/head';
const Service = () => {
    return ( 
      <div>
        <Head>
          <title> SERVICE </title>
        </Head>
        <div className="services section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon">
                  <Image src="/assets/images/service-01.png" alt="online degrees" width={75} height={100} />
                </div>
                <div className="main-content">
                  <h4>Online Degrees</h4>
                  <p>Whenever you need free templates in HTML CSS, you just remember TemplateMo website.</p>
                  <div className="main-button">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon">
                  <Image src="/assets/images/service-02.png" alt="short courses" width={75} height={100} />
                </div>
                <div className="main-content">
                  <h4>Short Courses</h4>
                  <p>You can browse free templates based on different tags such as digital marketing, etc.</p>
                  <div className="main-button">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <div className="icon">
                  <Image src="/assets/images/service-03.png" alt="web experts" width={75} height={100} />
                </div>
                <div className="main-content">
                  <h4>Web Experts</h4>
                  <p>You can start learning HTML CSS by modifying free templates from our website too.</p>
                  <div className="main-button">
                    <a href="#">Read More</a>
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
 
export default Service;