import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { userContext } from "../App";


const ViewRoom = () => {
  const {userData , setUserData } = useContext(userContext)
  const user_id = userData.id ; 
  // const user_id = JSON.parse(localStorage.getItem('user')).id;
  const { id } = useParams();
  const [data, getFetch] = useFetch(
    "http://127.0.0.1:8000/api/getsingle/" + id
  );
  useEffect(() => {
    getFetch();
  }, []);

  const [book, setBook] = useState({
    dataIn: "",
    dataOut: "",
    room_id: id,
    user_id:user_id,
    total_price: "",
  });

  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24)) * data.room_price;
  }

  const handleBooking = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const saveData = async (e) => {
    const date1 = new Date(book.dataIn);
    const date2 = new Date(book.dataOut);
    console.log(getDifferenceInDays(date1, date2));
    const price = getDifferenceInDays(date1, date2);

    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dataIn: e.target.dataIn.value,
        dataOut: e.target.dataOut.value,
        room_id: e.target.room_id.value,
        total_price:price,
        user_id:user_id,
      }),
    };
    console.log(requestOptions);

    const response = await fetch(
      "http://127.0.0.1:8000/api/addbook",
      requestOptions
    );

    if (response.ok) {
      alert("Book Successfully");
      // window.location.href = "http://localhost:3000/";
    } else {
      alert("There is something wrong");
      // window.location.href = "http://localhost:3000/";
    }
  };
  // console.log(book)
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
                <br /> difference in price. You may see some for as low as $.17
                each.
              </p>
              <a href="/" className="btn theme_btn button_hover">
                Home
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* form */}
      <div id="booking" className="section">
        <div className="section-center">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-md-push-5">
                <div className="booking-cta">
                  <p
                    style={{
                      marginBottom: "10%",
                      color: "black",
                      fontWeight: "bolder",
                      fontSize: "430%",
                    }}
                  >
                    Book your Room
                  </p>
                  <div className="">
                    <img
                      src={"../assets/image/" + data.room_image}
                      alt="room-image"
                      className="img-fluid"
                      style={{ width: "85%", height: "430px" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-md-5 col-md-pull-7"
                style={{ marginTop: "7%", marginBottom: "10%" }}
              >
                <div className="booking-form">
                  <div className="form-group">
                    <h2 style={{ color: "black" }}> {data.room_name}</h2>

                    <p>
                      <span
                        style={{
                          color: "black",
                          fontWeight: "bolder",
                          fontSize: "130%",
                        }}
                      >
                        {" "}
                        Room size:
                      </span>{" "}
                      {data.room_size}
                      <br />
                      {data.room_description}
                      <br />{" "}
                      <span
                        style={{
                          color: "black",
                          fontWeight: "bolder",
                          fontSize: "130%",
                        }}
                      >
                        Price:{" "}
                      </span>
                      {data.room_price}JD/night.
                      <br />
                      <span
                        style={{
                          color: "black",
                          fontWeight: "bolder",
                          fontSize: "130%",
                        }}
                      >
                        {" "}
                        Facilities:
                      </span>{" "}
                      {data.room_facilities}
                    </p>
                  </div>

                  {/* boooking */}

                  <form onSubmit={saveData}>
                    <input
                      type="hidden"
                      name="room_id"
                      onChange={handleBooking}
                      value={book.room_id}
                    />
                    <input
                      type="hidden"
                      name="total_price"
                      onChange={handleBooking}
                      value={book.total_price}
                    />
                    <input
                      type="hidden"
                      name="user_id"
                      onChange={handleBooking}
                    />
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Check In</span>
                          <input
                            className="form-control"
                            type="date"
                            required
                            name="dataIn"
                            onChange={handleBooking}
                            value={book.dataIn}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <span className="form-label">Check out</span>
                          <input
                            className="form-control"
                            type="date"
                            name="dataOut"
                            onChange={handleBooking}
                            value={book.dataOut}
                            required
                          />
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
};

export default ViewRoom;
