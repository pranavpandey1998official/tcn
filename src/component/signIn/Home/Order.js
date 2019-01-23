import React from 'react';



const Order = (props) => {
    return(
        <div class="col s12 m4">
        <div class="card">
            <div class="card-image">
                <img src={"/photoOfCrop"+"/"+props.name+".jpg"} className="responsive-img" />
                
                <a class="btn-floating halfway-fab  red" onClick={props.onClickFabListner}><i class="material-icons">add</i></a>
            </div>
            <span class="card-title"><b> <blockquote>{props.name}</blockquote></b></span>
            <div class="card-content" style={{paddingTop:"0px"}}>                
                   <h3 style={{margin:"0px"}}> {props.price}</h3>                

            </div>
        </div>
      </div>
    )
}

export default Order