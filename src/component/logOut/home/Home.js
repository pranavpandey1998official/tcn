import React from 'react';
import M from 'materialize-css';

import Slide from '../utility/Slide';

class Home extends React.Component {

    componentDidMount(){
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems,{
            indicator:true,
            height:550,
            interval:6000,
        });

    }
    
    render(){
        return(
        <React.Fragment>
                <div className="slider">
                    <ul className="slides">
                        <Slide image='/images/adult-agriculture-beautiful-247597.jpg' text="welcome to modi"/>
                        <Slide image='/images/adult-blond-board-298926.jpg' text="welcome to modi"/>
                        <Slide image='/images/agriculture-carrots-dirty-1268101.jpg' text="welcome to modi"/>
                        <Slide image='/images/agriculture-field-grain-5980.jpg' text="welcome to modi"/>
                        <Slide image='/images/basil-delicious-food-459469.jpg' text="welcome to modi"/>
                        <Slide image='/images/blur-breakfast-chef-262978.jpg' text="welcome to modi"/>
                    </ul>
                </div>
                
                <section className="section">
                    <div className="container">
                        <h3 className="text-grey center"> About Us</h3>
                        <p className='center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi asperiores maxime iure amet repudiandae magni obcaecati facere excepturi corporis tempore fuga possimus quia, soluta nostrum quo dolores itaque dolore?</p>
                    </div>
                </section>
        </React.Fragment>
        )
    }
}

export default Home