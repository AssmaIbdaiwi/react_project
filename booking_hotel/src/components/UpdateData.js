// //update function 
// const UpdateData = async () => {

   

//     //API 

//     let { id } = useParams()
//     const res = await fetch('http://127.0.0.1:8000/api/users/1');
//     const newData = await res.json();
//     const saveData = async (e) => {
//         e.preventDefault();

//         const requestOptions = 
//         {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },

//             body: JSON.stringify({
//                 name: e.target.name.value,
//                 email: e.target.email.value,
//                 phone: e.target.phone.value,
//                 age: e.target.age.value,
//                 address: e.target.address.value

//             })
            
//         }
     
//         const response = await fetch(`http://127.0.0.1:8000/api/users/1`, requestOptions);

//         if (response.ok) {
//             alert('Data Updated Successfully');
//         }

//         else {
//             alert('There is something wrong');
//         }
//     }
//     useEffect(() => {
//         saveData();
//      }
//          , []);
//     // document.getElementById('name').disabled = true;
//     // document.getElementById('age').disabled = true;
//     // document.getElementById('address').disabled = true;
//     // //   document.getElementById('input3').disabled = true;
//     // document.getElementById('email').disabled = true;
//     // document.getElementById('phone').disabled = true;
//     // document.getElementById('input6').style.display = 'block';
//     // document.getElementById('input7Save').style.display = 'none';
//     return (


//         <section className="section about-section gray-bg" id="about">
                                       


//             {/* {!isLoggedIn ? (
//           <>
//             <div>
//                 you are not logged in
//             </div>
           
//           </>
//         ) : 
//         ( */}
        
//             <div style={{ border: '1px solid', padding: '50px' }} className="container">

//                 <div className="row align-items-center flex-row-reverse ">

//                     <div className="col-lg-6 ">
//                         <div id='uesrInfo' className="about-text go-to ">
//                             <form action='' method='post'>                  
//                                 <div className="row about-list">
                                   
//                                     <div className="col-md-7">
//                                     <div className="media">
//                                         <label>Name</label>
//                                         <input id='name' type="text"   />
//                                     </div> <br></br>
//                                         <div className="media">
//                                             <label>Age</label>
//                                             <input id='age' type="text" value={data.age}  />
//                                         </div>
//                                         <br></br>
//                                         <div className="media">
//                                             <label>Residence</label>

//                                             <input id='address' type="text" value={data.address}  />
//                                         </div> <br></br>
//                                         {/* <div className="media">
//                                     <label>Address</label>
//                                     <input id='input3' type="text"  value={'Amman, Jordan'} disabled/>

//                                 </div> */}
//                                     </div>
//                                     <div className="col-md-7">
//                                         <div className="media">
//                                             <label>E-mail</label>
//                                             <input id='email' type="text" value={data.email}  />

//                                         </div> <br></br>
//                                         <div className="media">
//                                             <label>Phone</label>
//                                             <input id='phone' type="text" value={data.phone}  />

//                                         </div>


//                                     </div>
                                    

//                                 </div>
//                                 <br></br><br></br>
//                                 <input  onClick={SaveInfo} id='input7Save' type="button" style={{ display: 'none' }} className="btn btn-warning click" value={'Save'} />
//                             </form>
//                         </div>



//                         <div id='bookings' style={{ border: '1px solid', display: 'none' }} className="counter">
//                             <div className="row">




//                                 {/* API*/}

//                                 <div className="count-data text-center">
//                                     <h6 className="count h2" data-to="500" data-speed="500">Bookings</h6>
//                                     <p className="m-0px font-w-600">my bookings</p>
//                                 </div>


//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-lg-6">
//                         <div className="d-flex flex-column align-items-center text-center about-avatar">
//                             <img style={{width:'200px'}}
                            
//                              src={"https://pinonon.com/wp/wp-content/uploads/2016/06/c73e868161010a36daad4c089694e3a4-260x300.jpg"} /> <br></br>

//                             <input  onClick={EditProfile} id='input6' type="button"
//                              className="btn btn-warning click" value={'Edit profile'} /> <br></br>

//                             {/* <input onClick={SaveInfo} id='input7Save' type="button" style={{display:'none'}}  className="btn btn-warning"  value={'Save'} /><br></br> */}
//                             <input onClick={Mybookings} id='input8Show' type="button" className="btn btn-dark click" value={'My bookings'} />

//                             <input onClick={Info} id='info' type="button" style={{ display: 'none' }} className="btn btn-warning click" value={'My info'} />

//                         </div>

//                     </div>



//                 </div>
//                 <br></br>


//             </div>
//             {/* )} */}
//         </section>


//     )
// }
    

// export default UpdateData; 