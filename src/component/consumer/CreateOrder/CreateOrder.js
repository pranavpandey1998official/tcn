import React from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import M from 'materialize-css';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { createOrder } from '../../../Store/actions/orderAction';
import  { Marker } from "react-mapbox-gl";
import {Map} from '../utility';

class CreateOrder extends React.Component {

    state = {
        amount : 0,
    }

    handleInputChange = (e)=>{
        this.setState({
            amount:e.target.value
        })
    }
    handleConfirmOrder = (e)=>{
        this.props.createOrder({
            item:this.item,
            amount:this.state.amount
        } )
    }
 render () {

    this.props.items ? this.item = this.props.items.find((item)=>{
        return item.name === this.props.match.params.crop
    }):this.item={name:"",price:0}
     
    var crop = this.props.match.params.crop;

     return <>
                <div className="row">
                <div className="col s6 l4">
                <div className="card">
                <div className="card-image">
                    <img src={"/photoOfCrop"+"/"+crop+".jpg"} className="responsive-img" />
                    </div>
                <div className="card-content">
                     <span class="chip">
                        Todays price
                    </span>
                    <div className="price">
                        
                            {this.item.price+"  \u20B9"} 
                    </div>
                </div>
                    </div>
                    <div class="input-field ">
                      <input id="amount" type="number" class="validate" onChange={this.handleInputChange} />
                      <label for="amount">Amount</label>
                    </div>
                </div>
                <button data-target="modal1" class="btn modal-trigger purple ">Modal
                    create order
                </button>
                </div>

                <div id="modal1" class="modal">
                <div class="modal-content">
                  <h4 className="center">Please Confirm Your Order</h4>
                  <div className="row">
                    <div className="col l4">
                        <Map
                        style={"mapbox://styles/mapbox/streets-v9"}
                        containerStyle={{
                            height: "50vh",
                            width: "20vw"
                        }}
                        center={[this.props.profile.location.longitude,this.props.profile.location.latitude ]}
                        zoom={[13]}>
                            <Marker
                                coordinates={[this.props.profile.location.longitude,this.props.profile.location.latitude ]}
                                anchor="bottom">
                                <img className="anchoreColor" src="/baseline-place-24px.svg"/>
                            </Marker>
                        </Map>
                    </div>
                    <div className="col l6 offset-l2">
                    <p><b> Item </b>{this.item.name}</p>
                    <p><b>Name </b>{this.props.profile.firstName} {this.props.profile.lastName}</p>
                    <p><b>Phone Number</b> {this.props.profile.phoneNumber} </p>
                    <p><b>  IFSC </b>{this.props.profile.IFSC}</p>
                    <p><b>  Bank Account </b>{this.props.profile.BackAccountNo}</p>
                    <p><b>  Total Cost </b>{this.state.amount*this.item.price}</p>
                    
                    </div>  
                  </div>
                </div>
                <div class="modal-footer">
                  <div  class="modal-close waves-effect waves-green btn purple center" onClick={this.handleConfirmOrder}>Confirm</div>
                </div>
                </div>
            </>
 }

}
var mapStateToProps =(state)=>{
    console.log(state);
    var profile=state.firebase.profile.isEmpty? {BackAccountNo: 0,
        IFSC: "",
        firstName: "",
        isEmpty: false,
        isLoaded: true,
        lastName: "",
        location: {latitude: 0, longitude: 0},
        order: null,
        phoneNumber: 0,
        type: "consumer"} :state.firebase.profile
    return{
        profile: profile,
        items:state.firestore.ordered.rates
    }
}

var mapDispatchToProps =(dispatch)=>{

    return{
        createOrder:(item)=>(dispatch(createOrder(item)))
    }

}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        { collection: 'rates'}
    ])
)(CreateOrder)