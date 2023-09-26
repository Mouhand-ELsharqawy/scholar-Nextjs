import Head from 'next/head';
import Image from 'next/image'
const Service = () => {
    return ( 
      <div>
        <Head>
          <title> COURSE </title>
        </Head>
        <section className="section courses" id="courses" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-heading">
                <h6>Latest Courses</h6>
                <h2>Latest Courses</h2>
              </div>
            </div>
          </div>
          <ul className="event_filter">
            <li>
              <a className="is_active" href="#!" data-filter="*">Show All</a>
            </li>
            <li>
              <a href="#!" data-filter=".design">Webdesign</a>
            </li>
            <li>
              <a href="#!" data-filter=".development">Development</a>
            </li>
            <li>
              <a href="#!" data-filter=".wordpress">Wordpress</a>
            </li>
          </ul>
          <div className="row event_box">
            
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6  development">
              <div className="events_item">
                <div className="thumb">
                  <a href="#"><Image src="/assets/images/course-02.jpg" alt="" width={75} height={100} /></a>
                  <div className="category">Development</div>
                  <div className="price"><h6><em>$</em>340</h6></div>
                </div>
                <div className="down-content">
                  <div className="author">Cindy Walker</div>
                  <h4>Web Development Tips</h4>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 development">
              <div className="events_item">
                <div className="thumb">
                  <a href="#"><Image src="/assets/images/course-04.jpg" alt="" width={75} height={100} /></a>
                  <div className="category">Development</div>
                  <div className="price"><h6><em>$</em>450</h6></div>
                </div>
                <div className="down-content">
                  <div className="author">Stella Blair</div>
                  <h4>Online Learning Steps</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 align-self-center mb-30 event_outer col-md-6 wordpress development">
              <div className="events_item">
                <div className="thumb">
                  <a href="#"><Image src="/assets/images/course-05.jpg" alt="" width={75} height={100} /></a>
                  <div className="category">Wordpress</div>
                  <div className="price"><h6><em>$</em>320</h6></div>
                </div>
                <div className="down-content">
                  <div className="author">Sophia Rose</div>
                  <h4>Be a WordPress Master</h4>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
      </div>
     );
}
 
export default Service;