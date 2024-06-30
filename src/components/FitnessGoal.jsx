import img1 from '../assets/partner1-zF7vbTNY.png';
import img2 from '../assets/partner2-0v4I3E4H.png';
import img3 from '../assets/partner3-1SbtTxdT.png';
import img4 from '../assets/fitness1-5ZkARyP1.jpeg';
const FitnessGoal = () => {
  return (
    <>
      <div className="container-fluid fitness-goal1">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-md-5 ">
              <div className="fitness-col1">
                <h1 className="fitness-title">970K+ More</h1>
                <p>Trusted Companies Partner</p>
              </div>
            </div>
            <div className="col-md-7 ">
              <div className="fitness-col2">
                <img src={img1} alt="" className="image1 img-fluid px-3"></img>
                <img src={img2} alt="" className="image2 img-fluid px-3"></img>
                <img src={img3} alt="" className="image3 img-fluid px-3"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*****************************************/}
      <div className="container-fluid fitness-goal2">
        <div className="container">
          <div className="row gx-0 align-items-center">
            <div className="col-md-5 ">
              <div className="fitness-col3">
              <img src={img4} alt="" className="image6 img-fluid px-3"></img>
              <div className='popup'>
                <img src='https://cdn-icons-png.flaticon.com/512/2936/2936886.png' alt='' ></img>
                <h6 className='fw-bold'>Professional Trainer</h6>
              </div>
              </div>
            </div>
            <div className="col-md-7 ">
              <div className="fitness-col4">
                <h1>Get Ready To Reach Your Fitness Goals</h1>
                <div className='pt-1 pb-2'>
                  <p>Get ready to reach your fitness goals with our professional trainers. Our trainers are certified
                  and experienced in helping you achieve your fitness goals. Whether you are looking to lose weight, build
                  muscle, or just get in shape, our trainers will create a personalized workout plan just for you.
                  </p>
                  <p>Our trainers will also provide you with nutritional advice and guidance to help you make healthy
                  choices. With our professional trainers, you will be on your way to reaching your fitness goals in
                  no time.</p>
                </div>
                <button className='btn1'>Free Trial Today</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FitnessGoal