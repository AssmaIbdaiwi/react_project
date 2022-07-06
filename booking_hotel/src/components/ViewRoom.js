
import  React from 'react';

const ViewRoom = () => {
    return (
      <>
        {/* //// */}
        <section className="banner_area">
          <div className="booking_table d_flex align-items-center">
            <div
              className="overlay bg-parallax"
              data-stellar-ratio="0.9"
              data-stellar-vertical-offset="0"
              data-background=""
            ></div>
            <div
              className="container"
              style={{ marginTop: "15%", marginBottom: "10%" }}
            >
              <div className="banner_content text-center">
                <h2>Relax Your Mind</h2>
                <p>
                  If you are looking at blank cassettes on the web, you may be
                  very confused at the
                  <br /> difference in price. You may see some for as low as
                  $.17 each.
                </p>
                <a href="/" className="btn theme_btn button_hover">
                  Home
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* form */}
        <div
          id="booking"
          className="section"
          style={{ marginTop: "5%", marginBottom: "10%" }}
        >
          <div className="section-center">
            <div className="container">
              <div className="row">
                <div className="col-md-7 col-md-push-5">
                  <div className="booking-cta">
                    <h1 style={{ marginBottom: "7%", color: "black" }}>
                      Book your Room
                    </h1>
                    <div className="col-md-7">
                      <img
                        src="https://thumbs.dreamstime.com/b/smooth-nature-pic-full-hd-126695318.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-4 col-md-pull-7"
                  style={{ marginTop: "10%", marginBottom: "10%" }}
                >
                  <div className="booking-form">
                    <form>
                      <div className="form-group">
                        {/* <span className="form-label">Your Destination</span>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter a destination or hotel name"
                        /> */}
                        <h3 style={{ color: "black" }}> Room 3</h3>
                        <p>
                          If you are looking at blank cassettes on the web, you
                          may be very confused at the
                          <br /> difference in price. You may see some for as
                          low as $.17 each.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <span className="form-label">Check In</span>
                            <input
                              className="form-control"
                              type="date"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <span className="form-label">Check out</span>
                            <input
                              className="form-control"
                              type="date"
                              required
          
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-4">
                          <div className="form-group">
                            <span className="form-label">View</span>
                            <select className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                            <span className="select-arrow"></span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <span className="form-label">Adults</span>
                            <select className="form-control">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                            <span className="select-arrow"></span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="form-group">
                            <span className="form-label">Children</span>
                            <select className="form-control">
                              <option>0</option>
                              <option>1</option>
                              <option>2</option>
                            </select>
                            <span className="select-arrow"></span>
                          </div>
                        </div>
                      </div>
                      <div className="form-btn">
                        <button className="book_now_btn button_hover">
                          {" "}
                          Check availability{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default ViewRoom;


        
        

