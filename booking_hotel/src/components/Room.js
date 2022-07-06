import {NavLink} from 'react-router-dom'
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

const Rooms =()=>{
    const [data , getFetch] = useFetch("http://127.0.0.1:8000/api/apirooms");
    useEffect(() => {
        getFetch()

    }, [])
    
    
   const all =  data.map((room)=>{
        return(
            
            <div className="col-lg-4 col-sm-6">
                    <div className="accomodation_item text-center">
                        <div className="hotel_img">
                            <img src={"assets/image/"+room.room_image} width="100%" height="90%" alt=""/>
                            <a href={"ViewRoom/"+room.id} className="btn theme_btn button_hover">Book Now</a>
                        </div>
                        <a href="#"><h4 className="sec_h4">{room.room_name}</h4></a>
                        <h5>{room.room_price}<small>/night</small></h5>
                    </div>
                    
            </div>
        )
    })
    
    return(
        <>
 
        <section className="breadcrumb_area">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                <div className="page-cover text-center">
                    <h2 className="page-cover-tittle">Accomodation</h2>
                    <ol className="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Accomodation</li>
                    </ol>
                </div>
            </div>
        </section>

        <section className="accomodation_area section_gap">
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="title_color">Special Accomodation</h2>
                    <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,</p>
                </div>
                <div className="row mb_30">
                

                    {all}
                    
                </div>
            </div>
        </section>

        <section className="accomodation_area section_gap">
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="title_color">Normal Accomodation</h2>
                    <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,</p>
                </div>
                <div className="row accomodation_two">
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src="assets/image/room1.jpg" alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Double Deluxe Room</h4></a>
                            <h5>$250<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src="assets/image/room2.jpg" alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Single Deluxe Room</h4></a>
                            <h5>$200<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src="assets/image/room3.jpg" alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Honeymoon Suit</h4></a>
                            <h5>$750<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src="assets/image/room4.jpg" alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Economy Double</h4></a>
                            <h5>$200<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src="assets/image/room1.jpg" alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Double Deluxe Room</h4></a>
                            <h5>$250<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src="assets/image/room2.jpg" alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Single Deluxe Room</h4></a>
                            <h5>$200<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src="assets/image/room3.jpg" alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Honeymoon Suit</h4></a>
                            <h5>$750<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src="assets/image/room4.jpg" alt=""/>
                                <a href="#" className="btn theme_btn button_hover">Book Now</a>
                            </div>
                            <a href="#"><h4 className="sec_h4">Economy Double</h4></a>
                            <h5>$200<small>/night</small></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Rooms;