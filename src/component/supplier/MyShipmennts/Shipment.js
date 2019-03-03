import React from 'react';
import {Map} from '../utility';
import ReactMapboxGl, { Layer, Feature,Marker } from "react-mapbox-gl";

class Shipment extends React.Component{

    state={
        order:{
            name:"",
            consumerLocation:{
                longitude:0,
                latitude:0
            }

        }
    }

    componentWillMount(){
        this.props.shipment.orderOfShipment.get().then((order)=>{
            this.setState({
                order:order.data()
            })
        })
    }
    render(){
        return(
            <div className="row">
                <div className="col m4">
                    <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: "25vh",
                        width: "25vw"
                    }}
                    center={[this.state.order.consumerLocation.longitude,this.state.order.consumerLocation.latitude ]}
                    zoom={[10]}>
                        <Marker
                            coordinates={[this.state.order.consumerLocation.longitude,this.state.order.consumerLocation.latitude ]}
                            anchor="bottom">
                            <img className="anchoreColor" src="/baseline-place-24px.svg"/>
                        </Marker>
                    </Map>
                </div>
                <div className="col m6">
                <p><b>Item</b> {this.state.order.name} </p>
                <div className="btn purple lighten-4"> amount {this.props.shipment.amount} Kg</div>
                <div className="btn red lighten-1"> cost {this.props.shipment.amount*this.state.order.cost} &#8377;</div>
                </div>
            </div>
        )
    }

}

export default Shipment;