import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './userProfile.css';
function EditProfile(){
 
  document.getElementById('input1').disabled = false;
  document.getElementById('input2').disabled = false;
  document.getElementById('input3').disabled = false;
  document.getElementById('input4').disabled = false;
  document.getElementById('input5').disabled = false;
  document.getElementById('input6').style.display = 'none';
  document.getElementById('input7Save').style.display = 'block';


  
}
function SaveInfo(){
  //API 
  document.getElementById('input1').disabled = true;
  document.getElementById('input2').disabled = true;
  document.getElementById('input3').disabled = true;
  document.getElementById('input4').disabled = true;
  document.getElementById('input5').disabled = true;
  document.getElementById('input6').style.display = 'block';
  document.getElementById('input7Save').style.display = 'none';

}
function Mybookings(){
  //API 
  document.getElementById('uesrInfo').style.display = 'none';
  
  document.getElementById('bookings').style.display = 'block';
  document.getElementById('input6').style.display = 'none';
  document.getElementById('info').style.display = 'block';
  document.getElementById('input8Show').style.display = 'none';
  document.getElementById('bookings').style.display = 'block';

  document.getElementById('input7Save').style.display = 'none';


}
function Info(){
  //API 
  document.getElementById('uesrInfo').style.display = 'block';
  document.getElementById('info').style.display = 'none';
  document.getElementById('input8Show').style.display = 'block';

  document.getElementById('bookings').style.display = 'none';
  document.getElementById('input6').style.display = 'block';
  document.getElementById('input1').disabled = true;
  document.getElementById('input2').disabled = true;
  document.getElementById('input3').disabled = true;
  document.getElementById('input4').disabled = true;
  document.getElementById('input5').disabled = true;
}

  

const UserProfile = () => {

    // let {id} = useParams()
    // const [profile, setProfile] = useState({});

    // const fetchProfiles = async ()=> {
    //     const response = await fetch(``)
    //     const myProfile = await response.json();
    //     setProfile(myProfile)
        
    //   }

    //   useEffect(()=> {
    //     fetchProfiles();
    //   }
    //   ,[])
      

    return (
    
       
      <section   className="section about-section gray-bg" id="about">
            <div style={{border:'1px solid',padding:'50px'}} className="container">
              
                <div  className="row align-items-center flex-row-reverse ">
                  
                    <div className="col-lg-6 ">
                        <div id='uesrInfo'  className="about-text go-to ">
                            <h3 className="dark-color">Ahmad Alkhalaf</h3>
                            <div className="row about-list">
                                <div className="col-md-6">
                                 
                                    <div className="media">
                                        <label>Age</label>
                                        <input id='input1' type="text"  value={'22 Yr'} disabled/>
                                    </div>
                                    <div className="media">
                                        <label>Residence</label>
                                        <input id='input2' type="text"  value={'Jordan'} disabled/>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <input id='input3' type="text"  value={'Amman, Jordan'} disabled/>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <input id='input4' type="text"  value={'info@domain.com'} disabled/>

                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <input id='input5' type="text"  value={'777-7777-7777'} disabled/>

                                    </div>
                                   
                                   
                                </div>
                                
                            </div>
                            
                        </div>
                        <div id='bookings' style={{border:'1px solid',display:'none'}} className="counter">
                    <div className="row">
                {/* API*/}

                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">Bookings</h6>
                                <p className="m-0px font-w-600">my bookings</p>
                            </div>
               

                    </div>
                </div>
                    </div>
                    
                    <div   className="col-lg-6">
                        <div  className="d-flex flex-column align-items-center text-center about-avatar">
                            <img src={"https://bootdey.com/img/Content/avatar/avatar7.png"}/> <br></br>
                            <input onClick={EditProfile} id='input6' type="button"   className="btn btn-warning"  value={'Edite profile'} />
                    <input onClick={SaveInfo} id='input7Save' type="button" style={{display:'none'}}  className="btn btn-warning"  value={'Save'} /><br></br>
                    <input onClick={Mybookings} id='input8Show' type="button"   className="btn btn-warning"  value={'My bookings'} />
                    <input onClick={Info} id='info' type="button" style={{display:'none'}}  className="btn btn-warning"  value={'My info'} />

                        </div>
                        
                    </div>
                    


                </div>   
                <br></br>

            
            </div>
        </section>

    )
}

export default UserProfile;
