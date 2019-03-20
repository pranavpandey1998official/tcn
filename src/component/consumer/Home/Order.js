import React from 'react';



const Order = (props) => {
    return(
        <div class="col s12 m12">
        <div class="card horizontal ">
            <div class="card-image ">
                <img src={"/photoOfCrop/"+props.name+".jpg"} className="responsive-img" alt=""/>
                <div className="row center-align">
                    <div className="btn yellow lighten-2 black-text"> Market Price {props.marketPrice}&#8377;</div>
                </div>
            </div>
            <div class="card-stacked">
            <div className="card-title">
            <div className="row" style={{margin:0}}>               
            <h3 className="firstLetter"> <blockquote>{props.name}</blockquote></h3> 
         </div>
            </div>
            <div class="card-content" >
                <div className="row">
                <div className="btn red"> Our Price {props.price}&#8377;</div>
                </div>                

            </div>
            <div class="card-action">
                <div class="btn  red" onClick={()=>props.onClickFabListner(props.name)}><i class="material-icons">add_shopping_cart</i></div>
            </div>
            </div>
        </div>
      </div>
    )
}

export default Order