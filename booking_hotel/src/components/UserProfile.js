import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './userProfile.css';
import { ProfileContext } from "./ProfileContext";
import { useContext } from "react";
import UpdateData from './UpdateDataU';
import useFetch from '../hooks/useFetch';

function Info() {
    //API 
    document.getElementById('uesrInfo').style.display = 'block';
    document.getElementById('info').style.display = 'none';
    document.getElementById('input8Show').style.display = 'block';

    document.getElementById('bookings').style.display = 'none';
    document.getElementById('input6').style.display = 'block';
    document.getElementById('age').disabled = true;
    document.getElementById('address').disabled = true;
    //   document.getElementById('input3').disabled = true;
    document.getElementById('email').disabled = true;
    document.getElementById('phone').disabled = true;
    document.getElementById('name').disabled = true;

}




const Mybookings = () => {
    //API 
    document.getElementById('bookings').style.display = 'block';
    document.getElementById('input8Show').style.display = 'none';
    document.getElementById('info').style.display = 'block';

    document.getElementById('uesrInfo').style.display = 'none';

    document.getElementById('bookings').style.display = 'block';
    document.getElementById('input6').style.display = 'none';


    document.getElementById('input7Save').style.display = 'none';


}



const UserProfile = () => {

    let i = 1;

    // const [myID, setMyID] = useState({});

    // setMyID(JSON.parse(localStorage.getItem('user'))).id;

    
    // const { isLoggedIn } = useContext(ProfileContext);

    const user_id = sessionStorage.getItem('user_id');

    //view user info
    const [data, setData] = useState({});


    // let { id } = useParams();

    // const fetchProfile = async () => {
    //     const response = await fetch('http://127.0.0.1:8000/api/users/1')
    //     const myProfile = await response.json();
       
    //     setData(myProfile);
    //     console.log(myProfile)

    // }

    // //view user bookings
    // // let { id } = useParams();


    // useEffect(() => {
    //     fetchProfile();
    // }
    //     , []);

        const [bookingData , getFetch] = useFetch("http://127.0.0.1:8000/api/books/"+user_id);
        // const [ bookings, setBookings ] = useState([]);


       useEffect(() => {
        getFetch()
    }

       
           , []);


     const userBookings = bookingData.map((book)=>{
        return (
            <tr>
                <td>{book.id}</td>
                <td>{book.checkIn}</td>
                <td>{book.checkOut}</td>
                <td>{book.total_price}</td>
                
            </tr>
        )
     })      

    return (


        <section className="section about-section gray-bg" id="about">



            {/* {!isLoggedIn ? (
          <>
            <div>
                you are not logged in
            </div>
           
          </>
        ) : 
        ( */}

            <div style={{ border: '1px solid', padding: '50px' }} className="container">

                <div className="row align-items-center flex-row-reverse ">

                    <div className="col-lg-6 ">

                        {/* start */}
                        <div id='uesrInfo' className="about-text go-to ">
                            <form action='' method='post'>
                                <div className="row about-list">

                                    <div className="col-md-7">
                                        <div className="media">
                                            <label>Name</label>
                                            <input
                                                id='name' type="text" value={data.name} disabled />
                                        </div> <br></br>
                                        <div className="media">
                                            <label>Age</label>
                                            <input id='age' type="text" value={data.age} disabled />
                                        </div>
                                        <br></br>
                                        <div className="media">
                                            <label>Residence</label>

                                            <input id='address' type="text" value={data.address} disabled />
                                        </div> <br></br>
                                        {/* <div className="media">
                                    <label>Address</label>
                                    <input id='input3' type="text"  value={'Amman, Jordan'} disabled/>

                                </div> */}
                                    </div>
                                    <div className="col-md-7">
                                        <div className="media">
                                            <label>E-mail</label>
                                            <input id='email' type="text" value={data.email} disabled />

                                        </div> <br></br>
                                        <div className="media">
                                            <label>Phone</label>
                                            <input id='phone' type="text" value={data.phone} disabled />

                                        </div>
                                    </div>


                                </div>
                                <br></br><br></br>
                                {/* <input onClick={SaveInfo} id='input7Save' type="button" style={{ display: 'none' }} className="btn btn-warning click" value={'Save'} /> */}
                            </form>
                        </div>

                        {/* end */}

                        <div id='bookings' style={{ border: '1px solid', display: 'none' }} className="counter">
                            <div className="row">



                                {/* API*/}

                                <div className="count-data text-center">
                                    <h6 className="count h2" data-to="500" data-speed="500">Bookings</h6>
                                   
                                    {/* <p className="m-0px font-w-600">


                                    </p> */}

                                        



                                    <table className="table mt-5">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>checkIn</th>
                                                <th>checkOut</th>
                                                <th>total price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                    {userBookings}                                        
                          
                                        </tbody>
                                    </table>






                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="d-flex flex-column align-items-center text-center about-avatar">
                            <img style={{ width: '200px' }}

                                src={"https://pinonon.com/wp/wp-content/uploads/2016/06/c73e868161010a36daad4c089694e3a4-260x300.jpg"} /> <br></br>

                            {/* <input  onClick={EditProfile} id='input6' type="button"
                             className="btn btn-warning click" value={'Edit profile'} /> <br></br> */}
                            <Link type="button" to="/edit">

                                <button className="btn btn-warning" type="button">
                                    Edit profile
                                </button>


                            </Link> <br></br>


                            {/* <input onClick={SaveInfo} id='input7Save' type="button" style={{display:'none'}}  className="btn btn-warning"  value={'Save'} /><br></br> */}
                            <input onClick={Mybookings} id='input8Show' type="button" className="btn btn-dark click" value={'My bookings'} />

                            {/* <input onClick={Info} id='info' type="button" style={{ display: 'none' }} className="btn btn-warning click" /> */}
{/* 
                            <Link id='info' style={{ display: 'none' }} type="button" to="/back">

                                <button className="btn btn-dark" type="button">
                                    Back
                                </button>


                            </Link> */}

                        </div>

                    </div>



                </div>
                <br></br>


            </div>
            {/* )} */}
        </section>


    )
}

export default UserProfile;
