import React from 'react';
import {connect} from 'react-redux';
import ReactMapboxGl, { Layer, Feature,Marker } from "react-mapbox-gl";
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import {Map} from '../utility';
import Logo from '../logo'
const Profile = (props) => {
        
    return(
        <React.Fragment>
       
        <div className="row">
            <div className="col l4">
                <Logo />
            </div>
            <div className="col l7 offset-l1">
            <div className="section">
                <blockquote className="quotes">"Your Are What Makes Us "</blockquote>
            </div>
            </div>
        </div>
            <div className="row">
                <div class="col s12 m12">
                    <div class="card horizontal">
                        <div class="card-image">
                        <Map
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: "50vh",
                            width: "30vw"
                        }}
                        center={[props.profile.location.longitude,props.profile.location.latitude ]}
                        zoom={[13]}>
                        <Layer
                            type="symbol"
                            id="marker"
                            layout={{ "icon-image": "marker-15" }}>
                                <Feature coordinates={[props.profile.location.longitude,props.profile.location.latitude ]}/>
                        </Layer>
                        <Marker
                            coordinates={[props.profile.location.longitude,props.profile.location.latitude ]}
                            anchor="bottom">
                            <img className="anchoreColor" src="/baseline-place-24px.svg"/>
                        </Marker>
                    </Map>
                        </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                   <h3>{props.profile.firstName} {props.profile.lastName}</h3>
                                   <p><b>Phone Number</b> {props.profile.phoneNumber} </p>
                                   <p><b>  IFSC </b>{props.profile.IFSC}</p>
                                   <p><b>  Bank Account </b>{props.profile.BackAccountNo}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </React.Fragment>
    )
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
        profile: profile
    }
}

export default compose(connect(mapStateToProps),firestoreConnect())(Profile)