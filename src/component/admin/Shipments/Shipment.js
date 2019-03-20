import React from 'react';
import {Map} from '../utility';
import ReactMapboxGl, { Layer, Feature,Marker } from "react-mapbox-gl";

class Shipment extends React.Component{

    state={
     
    }

    componentWillMount(){
        
    }
    render(){
        return(
            <div className="row">
                <div className="col m4">
                <img src={"/photoOfCrop/"+this.props.shipment.name+".jpg"} className="responsive-img center" alt=""/>
                </div>
                <div className="col m6">
                <h4><b>ITEM</b> {this.props.shipment.name} </h4>
                <br></br>
                <div className="btn purple lighten-4"> amount {this.props.shipment.amount} Kg</div>
                </div>
            </div>
        )
    }

}

export default Shipment;