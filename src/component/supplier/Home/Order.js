import React from 'react';
import {Map} from '../utility';
import{ Marker } from "react-mapbox-gl";
import M from 'materialize-css';
import {connect} from 'react-redux';
import {createShipment} from '../../../Store/actions/orderAction';

class Order extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {range: 0};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({range: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        if(this.state.range===0){
            alert("cannot create shipment with 0 amount")
            return
        }
        this.props.createShipment({
            amount:this.state.range,
            id:this.props.item.id,
            name:this.props.item.name,
            currrentSupplyAmount:this.props.item.supplyAmount
        })
        
      }

    componentDidMount (){
        
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);

    }
    render(){
        var item = this.props.item
        var amount = item.demandAmount-item.supplyAmount
    return(
        <>
        <a className="modal-trigger" href={"#"+item.id}>
        <div className="row hoverable">
            <div className="col s12 m4 ">
                <img src={"/photoOfCrop/"+item.name+".jpg"} className="responsive-img center" alt=""/>
            </div>
            <div className="col s12 m6 ">
                <h4><b className="black-text">ITEM </b>  {item.name} </h4>
                <h4><b className="black-text">  Total Demand </b>{amount} Kg</h4>
            </div>
        </div>
       </a>
       <div id={item.id} class="modal modal-fixed-footer">
        <div class="modal-content">
            <div className="row">
                <div className="col s12 offset-m3 m6">
                        <img src={"/photoOfCrop"+"/"+item.name+".jpg"} className="responsive-img center" alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col offset-s3 s6">
                    <h5><b>Item</b> {item.name} </h5>
                </div>
            </div>
        <div className="row">
            <form>
                <p class="range-field">
                    <input type="range" min="0" max={amount} value={this.state.range} onChange={this.handleChange} />
                </p>
            </form>
        </div>
        </div>
            <div class="modal-footer">
                <div className="btn red lighten-1 hide-on-small-only left"> Amount {this.state.range} Kg</div>
                <a href="#!" class="modal-close waves-effect waves-green btn-flat" onClick={this.handleSubmit}>Agree</a>
            </div>
        </div>   
       </>
    )
}
}
const mapStateToDispatch=(dispatch)=>{
    return({
        createShipment : (shipment) => (dispatch(createShipment(shipment)))
    })
}

export default connect(null,mapStateToDispatch)(Order)