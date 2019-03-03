import React from 'react';
import M from 'materialize-css';

import Slide from '../utility/Slide';

class Home extends React.Component {

    componentDidMount(){
        var elems = document.querySelectorAll('.slider');
         M.Slider.init(elems,{
            indicator:true,
            height:550,
            interval:6000,
        });
         elems = document.querySelectorAll('.parallax');
        M.Parallax.init(elems);
         elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

    }
    
    render(){
        return(
        <React.Fragment>
                <div className="slider">
                    <ul className="slides">
                        <Slide image='/images/adult-agriculture-beautiful-247597.jpg' text="welcome to tcn"/>
                        <Slide image='/images/adult-blond-board-298926.jpg' text="welcome to modi"/>
                        <Slide image='/images/agriculture-carrots-dirty-1268101.jpg' text="welcome to tcn"/>
                        <Slide image='/images/agriculture-field-grain-5980.jpg' text="welcome to tcn"/>
                        <Slide image='/images/basil-delicious-food-459469.jpg' text="welcome to tcn"/>
                        <Slide image='/images/blur-breakfast-chef-262978.jpg' text="welcome to tcn"/>
                    </ul>
                </div>
                
                <section className="section">
                    <div className="container">
                        <h3 className="text-grey center"> About Us</h3>
                        <p className='center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi asperiores maxime iure amet repudiandae magni obcaecati facere excepturi corporis tempore fuga possimus quia, soluta nostrum quo dolores itaque dolore?</p>
                    </div>
                </section>
                <section>
                    <div className="card threeprofit">
                        <div className="card-content">
                            <div className="row valign-wrapper">
                                <div className="col s12 m4 valign-wrapper">
                                   <p> A CROP TAXI</p>
                                </div>
                                <div className="col s12 m4 valign-wrapper">
                                RETAILER RINGS FOR ONE
                                </div>
                                <div className="col s12 m4 valign-wrapper">
                                    NEAREST WAREHOUSE ACCEPTS
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="parallax-container valign-wrapper">
                <div class="parallax"><img src={"/whyus.jpg"} alt=""/></div>
                <div className="container">
                <div className="row valign-wrapper">
                    <div className="col s12 m5 ">
                        <h2 className="white-text"><b>WHY TCN</b></h2>
                    </div>
                    <div className="col s12 m8 offset-m1 grey lighten-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt aperiam molestias, sint rem, veniam animi repellendus officiis minus perferendis nisi suscipit minima libero, commodi earum. Fugiat voluptatum amet quibusdam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt aperiam molestias, sint rem, veniam animi repellendus officiis minus perferendis nisi suscipit minima libero, commodi earum. Fugiat voluptatum amet quibusdam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt aperiam molestias, sint rem, veniam animi repellendus officiis minus perferendis nisi suscipit minima libero, commodi earum. Fugiat voluptatum amet quibusdam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt aperiam molestias, sint rem, veniam animi repellendus officiis minus perferendis nisi suscipit minima libero, commodi earum. Fugiat voluptatum amet quibusdam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sunt aperiam molestias, sint rem, veniam animi repellendus officiis minus perferendis nisi suscipit minima libero, commodi earum. Fugiat voluptatum amet quibusdam?
                    </div>
                    </div>
                    </div>
                </div>
                <div className="section">
                <div class="parallax-container center-align">
                    <div class="parallax"><img src={"/investor.jpg"} alt=""/></div>
                    <h2 className="white-text"><b>Our Investors</b></h2>
                </div>
                </div>
    
        </React.Fragment>
        )
    }
}

export default Home