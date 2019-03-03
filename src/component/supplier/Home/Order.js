import React from 'react';
import {Map} from '../utility';
import ReactMapboxGl, { Layer, Feature,Marker } from "react-mapbox-gl";
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
        if(this.state.range==0){
            alert("cannot create shipment with 0 amount")
            return
        }
        this.props.createShipment({
            amount:this.state.range,
            id:this.props.item.id,
            remainingAmount:parseInt(this.props.item.remainingAmount)-parseInt(this.state.range)
        })
        
      }

    componentDidMount (){
        
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);

    }
    render(){
        var item = this.props.item
    return(
        <>
        <a className="modal-trigger" href={"#"+item.id}>
       <div className="row hoverable valign-wrapper">
        <div className="col m3 left">
            <img src={"/photoOfCrop"+"/"+item.name+".jpg"} className="responsive-img center" alt=""/>
        </div>
        <div className="col m6">
            <p><b>Item</b> {item.name} </p>
            <p><b>  Total Demand </b>{item.totalAmount}</p>
            <div className="row">
                <div className="col m6">
                    <div className="btn purple lighten-4"> Rate {item.cost}</div>
                </div>
                <div className="col m6">
                    <div className="btn red">Remaining {item.remainingAmount}Kg</div>
                </div>
            </div>
        </div>
        <div className="col m3 right">
            <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: "25vh",
                width: "15vw"
            }}
            center={[item.consumerLocation.longitude,item.consumerLocation.latitude ]}
            zoom={[10]}>
            <Marker
                coordinates={[item.consumerLocation.longitude,item.consumerLocation.latitude ]}
                anchor="bottom">
                <img className="anchoreColor" src="/baseline-place-24px.svg"/>
            </Marker>
        </Map>
        </div>
       </div>
       </a>
       <div id={item.id} class="modal modal-fixed-footer">
        <div class="modal-content">
        <div className="row">
            <div className="col s12 m6">
                <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: "40vh",
                    width: "100%"
                }}
                center={[item.consumerLocation.longitude,item.consumerLocation.latitude ]}
                zoom={[10]}>
                    <Marker
                        coordinates={[item.consumerLocation.longitude,item.consumerLocation.latitude ]}
                        anchor="bottom">
                        <img className="anchoreColor" src="/baseline-place-24px.svg"/>
                    </Marker>
                </Map>
            </div>
            <div className="col s12 m6">
                <div className="row">
                    <div className="col s12 left">
                        <img src={"/photoOfCrop"+"/"+item.name+".jpg"} className="responsive-img center" alt=""/>
                    </div>
                </div>
                <div className="row">
                <div className="col s6">
                <p><b>Item</b> {item.name} </p>
                </div>
                <div className="col s6">
                <div className="btn purple lighten-4"> Rate {item.cost}</div>
                </div>
                </div>
            </div>
        </div>
        <div className="row">
        <form>
            <p class="range-field">
                <input type="range" min="0" max={item.remainingAmount} value={this.state.range} onChange={this.handleChange} />
            </p>
        </form>
        </div>
        </div>
            <div class="modal-footer">
                <div className="btn red lighten-1 hide-on-small-only left"> Amount {this.state.range} Kg</div>
                <div className="btn red lighten-1 " > Cost {this.state.range*item.cost}&#8377;</div>
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