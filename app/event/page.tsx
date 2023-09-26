import Image from "next/image";
import Head from "next/head";
const Event = () => {
    return ( 
      <div>
        <Head>
          <title> EVENT </title>
        </Head>
        <div className="section events" id="events">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="section-heading">
            <h6>Schedule</h6>
            <h2>Upcoming Events</h2>
          </div>
        </div>
        <div className="col-lg-12 col-md-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-3">
                <div className="image">
                  <Image src="/assets/images/event-01.jpg" alt="" width={75} height={100} />
                </div>
              </div>
              <div className="col-lg-9">
                <ul>
                  <li>
                    <div className="category">Web Design</div>
                    <h4>UI Best Practices</h4>
                  </li>
                  <li>
                    <div>Date:</div>
                    <h6>16 Feb 2036</h6>
                  </li>
                  <li>
                    <div>Duration:</div>
                    <h6>22 Hours</h6>
                  </li>
                  <li>
                    <div>Price:</div>
                    <h6>$120</h6>
                  </li>
                </ul>
                <a href="#"><i className="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-3">
                <div className="image">
                  <Image src="/assets/images/event-02.jpg" alt="" width={75} height={100} />
                </div>
              </div>
              <div className="col-lg-9">
                <ul>
                  <li>
                    <div className="category">Front End</div>
                    <h4>New Design Trend</h4>
                  </li>
                  <li>
                    <div>Date:</div>
                    <h6>24 Feb 2036</h6>
                  </li>
                  <li>
                    <div>Duration:</div>
                    <h6>30 Hours</h6>
                  </li>
                  <li>
                    <div>Price:</div>
                    <h6>$320</h6>
                  </li>
                </ul>
                <a href="#"><i className="fa fa-angle-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-3">
                <div className="image">
                  <Image src="/assets/images/event-03.jpg" alt="" width={75} height={100} />
                </div>
              </div>
              <div className="col-lg-9">
                <ul>
                  <li>
                    <div className="category">Full Stack</div>
                    <h4>Web Programming</h4>
                  </li>
                  <li>
                    <div>Date:</div>
                    <h6>12 Mar 2036</h6>
                  </li>
                  <li>
                    <div>Duration:</div>
                    <h6>48 Hours</h6>
                  </li>
                  <li>
                    <div>Price:</div>
                    <h6>$440</h6>
                  </li>
                </ul>
                <a href="#"><i className="fa fa-angle-right"></i></a>
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
 
export default Event;