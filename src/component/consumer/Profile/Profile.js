import React from 'react';
import {connect} from 'react-redux';
import ReactMapboxGl, { Layer, Feature,Marker } from "react-mapbox-gl";
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import {Map} from '../utility';
const Profile = (props) => {
        
    return(
        <React.Fragment>
       
        <div className="row">
            <div className="col l4">
                <svg height="290" width="390"viewBox="-30 0 1012 1111">
                    <circle cx="350" cy="550" r="500" stroke="black" stroke-width="0" fill="#e91e63" >
                    
                    </circle>
                    <g transform="translate(80,300.5)">
                    <path d="m479.703125 151.066406h-33.238281c-9.683594-9.683594-15.113282-15.113281-24.796875-24.792968-9.683594 9.679687-15.113281 15.109374-24.796875 24.792968h-33.242188c-9.683594-9.683594-15.109375-15.113281-24.792968-24.792968-9.683594 9.679687-15.113282 15.109374-24.796876 24.792968h-33.242187c-9.683594-9.683594-15.113281-15.113281-24.792969-24.792968-9.683594 9.679687-15.113281 15.109374-24.796875 24.792968h-33.242187c-9.683594-9.683594-15.113282-15.113281-24.792969-24.792968-9.683594 9.679687-15.113281 15.109374-24.796875 24.792968h-33.242188c-9.683593-9.683594-15.113281-15.113281-24.792968-24.792968-9.683594 9.679687-15.113282 15.109374-24.796875 24.792968h-33.246094c-5.441406-5.4375-9.539063-9.535156-13.800781-13.796875v239.886719h475.484375v-240.367188c-4.433594 4.4375-8.632813 8.636719-14.277344 14.277344zm0 0" fill="#fff5cc"/><path d="m300.300781 340.144531h-201.316406v-188.9375h201.316406zm0 0" fill="#ffc477"/><path d="m472.5625 377.15625h-121.992188v-225.949219h121.992188zm0 0" fill="#ffc477"/><path d="m270.300781 340.144531h-201.316406v-188.9375h201.316406zm0 0" fill="#b3d8f4"/><path d="m153.101562 209.402344 15.136719 56.570312h85.917969l15.140625-56.570312zm0 0" fill="#57a4ff"/><path d="m204.050781 298.734375c0 7.503906-6.085937 13.589844-13.59375 13.589844-7.507812 0-13.59375-6.085938-13.59375-13.589844 0-7.507813 6.085938-13.59375 13.59375-13.59375 7.507813 0 13.59375 6.085937 13.59375 13.59375zm0 0" fill="#57a4ff"/><path d="m259.042969 298.734375c0 7.503906-6.085938 13.589844-13.59375 13.589844-7.507813 0-13.59375-6.085938-13.59375-13.589844 0-7.507813 6.085937-13.59375 13.59375-13.59375 7.507812 0 13.59375 6.085937 13.59375 13.59375zm0 0" fill="#57a4ff"/><path d="m123.101562 209.402344 15.136719 56.570312h85.917969l15.140625-56.570312zm0 0" fill="#fff"/><path d="m174.050781 298.734375c0 7.503906-6.085937 13.589844-13.59375 13.589844-7.507812 0-13.59375-6.085938-13.59375-13.589844 0-7.507813 6.085938-13.59375 13.59375-13.59375 7.507813 0 13.59375 6.085937 13.59375 13.59375zm0 0" fill="#fff"/><path d="m229.042969 298.734375c0 7.503906-6.085938 13.589844-13.59375 13.589844-7.507813 0-13.59375-6.085938-13.59375-13.589844 0-7.507813 6.085937-13.59375 13.59375-13.59375 7.507812 0 13.59375 6.085937 13.59375 13.59375zm0 0" fill="#fff"/><path d="m7.5 59.015625h82.832031v67.257813c-9.683593 9.679687-15.109375 15.109374-24.792969 24.792968h-33.242187c-9.683594-9.683594-15.113281-15.113281-24.796875-24.792968zm0 0" fill="#ffe477"/><path d="m90.332031 59.015625h82.832031v67.257813c-9.679687 9.679687-15.109374 15.109374-24.792968 24.792968h-33.242188c-9.683594-9.683594-15.113281-15.113281-24.796875-24.792968zm0 0" fill="#fff"/><path d="m173.167969 59.015625h82.832031v67.257813c-9.683594 9.679687-15.113281 15.109374-24.796875 24.792968h-33.242187c-9.683594-9.683594-15.109376-15.113281-24.792969-24.792968zm0 0" fill="#ffe477"/><path d="m256 59.015625h82.832031v67.257813c-9.683593 9.679687-15.109375 15.109374-24.792969 24.792968h-33.242187c-9.683594-9.683594-15.113281-15.113281-24.796875-24.792968zm0 0" fill="#fff"/><path d="m338.832031 59.015625h82.832031v67.257813c-9.679687 9.679687-15.109374 15.109374-24.792968 24.792968h-33.242188c-9.683594-9.683594-15.113281-15.113281-24.796875-24.792968zm0 0" fill="#ffe477"/><path d="m421.667969 59.015625h82.832031v67.257813c-9.683594 9.679687-15.113281 15.109374-24.796875 24.792968h-33.242187c-9.683594-9.683594-15.109376-15.113281-24.792969-24.792968zm0 0" fill="#fff"/><path d="m442.5625 377.15625h-121.992188v-225.949219h121.992188zm0 0" fill="#57a4ff"/><path d="m383.65625 205.410156h55.816406v30.386719h-55.816406zm0 0" fill="#006df0"/><path d="m353.65625 205.410156h55.816406v30.386719h-55.816406zm0 0" fill="#fff"/><path d="m479.476562 8h-446.953124c-9.773438 10.503906-15.25 16.390625-25.023438 26.894531v24.121094h497v-24.121094c-9.773438-10.503906-15.25-16.390625-25.023438-26.894531zm0 0" fill="#57a4ff"/><path d="m7.5 377.15625h497v35.433594h-497zm0 0" fill="#ffe477"/><g fill="#ffc477"><path d="m353.832031 141.269531c-4.707031-4.707031-9.050781-9.050781-15-15-9.683593 9.683594-15.109375 15.113281-24.792969 24.796875h30c3.734376-3.734375 6.835938-6.835937 9.792969-9.796875zm0 0"/><path d="m271 141.269531-15-15c-9.683594 9.683594-15.113281 15.113281-24.796875 24.796875h30c3.738281-3.734375 6.839844-6.835937 9.796875-9.796875zm0 0"/><path d="m436.667969 141.269531-15-15c-9.683594 9.683594-15.113281 15.113281-24.796875 24.796875h30c3.734375-3.734375 6.839844-6.835937 9.796875-9.796875zm0 0"/><path d="m493.980469 136.789062c-4.433594 4.4375-8.632813 8.636719-14.277344 14.277344h14.277344zm0 0"/><path d="m32.296875 151.066406c-5.441406-5.4375-9.535156-9.535156-13.800781-13.796875v239.886719h30v-226.089844zm0 0"/><path d="m105.332031 141.269531c-4.707031-4.707031-9.050781-9.050781-15-15-9.683593 9.683594-15.109375 15.113281-24.792969 24.796875h30c3.734376-3.734375 6.835938-6.835937 9.792969-9.796875zm0 0"/><path d="m188.167969 141.269531-15-15c-9.683594 9.683594-15.113281 15.113281-24.796875 24.796875h30c3.734375-3.734375 6.839844-6.835937 9.796875-9.796875zm0 0"/></g><path d="m68.984375 151.207031h30v188.9375h-30zm0 0" fill="#57a4ff"/><path d="m123.101562 209.402344 15.136719 56.570312h30l-15.136719-56.570312zm0 0" fill="#e0e0e2"/><path d="m37.5 126.269531v-67.253906h-30v67.253906l24.796875 24.796875h30c-9.683594-9.683594-15.113281-15.113281-24.796875-24.796875zm0 0" fill="#ffb655"/><path d="m120.332031 126.269531v-67.253906h-30v67.253906l24.796875 24.796875h30c-9.683594-9.683594-15.113281-15.113281-24.796875-24.796875zm0 0" fill="#e0e0e2"/><path d="m203.167969 126.269531v-67.253906h-30v67.253906l24.792969 24.796875h30c-9.683594-9.683594-15.109376-15.113281-24.792969-24.796875zm0 0" fill="#ffb655"/><path d="m286 126.269531v-67.253906h-30v67.253906c9.683594 9.683594 15.113281 15.113281 24.796875 24.796875h30c-9.683594-9.683594-15.113281-15.113281-24.796875-24.796875zm0 0" fill="#e0e0e2"/><path d="m368.832031 126.269531v-67.253906h-30v67.253906c9.683594 9.683594 15.113281 15.113281 24.796875 24.796875h30c-9.683594-9.683594-15.113281-15.113281-24.796875-24.796875zm0 0" fill="#ffb655"/><path d="m451.667969 126.269531v-67.253906h-30v67.253906l24.792969 24.796875h30c-9.683594-9.683594-15.109376-15.113281-24.792969-24.796875zm0 0" fill="#e0e0e2"/><path d="m320.570312 151.207031h30v225.949219h-30zm0 0" fill="#006df0"/><path d="m353.65625 205.410156h30v30.386719h-30zm0 0" fill="#e0e0e2"/><path d="m62.523438 8h-30c-9.773438 10.503906-15.25 16.390625-25.023438 26.894531v24.121094h30v-24.121094c9.773438-10.503906 15.25-16.390625 25.023438-26.894531zm0 0" fill="#006df0"/><path d="m7.5 377.15625h30v35.433594h-30zm0 0" fill="#ffb655"/><path d="m229.914062 273.472656 15.136719-56.570312h5.382813v-15h-121.585938l-3.941406-14.742188h-36.054688v15h24.535157l24.175781 90.480469h2.699219c-.582031 1.929687-.898438 3.972656-.898438 6.09375 0 11.628906 9.464844 21.089844 21.09375 21.089844 11.632813 0 21.09375-9.460938 21.09375-21.089844 0-2.117187-.3125-4.164063-.898437-6.09375h14.605468c-.585937 1.929687-.898437 3.972656-.898437 6.09375 0 11.628906 9.460937 21.089844 21.09375 21.089844 11.628906 0 21.09375-9.460938 21.09375-21.089844 0-11.632813-9.464844-21.09375-21.09375-21.09375h-66.371094l-1.113281-4.167969zm-57.035156-15v-13.285156h16.640625v13.285156zm31.640625 0v-13.285156h17.4375l-3.554687 13.285156zm25.003907-41.570312-3.554688 13.285156h-21.449219v-13.285156zm-40.003907 0v13.285156h-16.640625v-13.285156zm-31.640625 0v13.285156h-21.453125l-3.554687-13.285156zm8.671875 81.828125c0 3.359375-2.734375 6.09375-6.09375 6.09375s-6.09375-2.730469-6.09375-6.09375c0-3.359375 2.734375-6.089844 6.09375-6.089844s6.09375 2.730469 6.09375 6.089844zm54.992188 0c0 3.359375-2.734375 6.09375-6.09375 6.09375s-6.09375-2.730469-6.09375-6.09375c0-3.359375 2.734375-6.089844 6.09375-6.089844s6.09375 2.730469 6.09375 6.089844zm-77.546875-40.257813-3.554688-13.285156h17.4375v13.285156zm0 0"/><path d="m404.503906 197.910156-16.84375-28.160156h-12.464844l-17.160156 28.160156h-11.878906v45.386719h70.816406v-45.386719zm-23.136718-9.460937 5.660156 9.457031h-11.425782zm20.609374 39.847656h-40.816406v-15.390625h40.816406zm0 0"/><path d="m482.742188.5h-453.484376l-29.257812 31.445312v97.433594l29.1875 29.1875h39.457031l21.6875-21.6875 21.6875 21.6875h39.457031l21.6875-21.6875 21.6875 21.6875h39.457032l21.691406-21.6875 21.6875 21.6875h39.457031l21.6875-21.6875 21.6875 21.6875h39.457031l21.6875-21.6875 21.6875 21.6875h39.457032l29.191406-29.1875v-97.433594zm-420.308594 143.066406h-27.03125l-20.402344-20.402344v-56.648437h67.832031v56.648437zm82.832031 0h-27.03125l-20.398437-20.402344v-56.648437h67.832031v56.648437zm82.832031 0h-27.027344l-20.402343-20.402344v-56.648437h67.832031v56.648437zm82.835938 0h-27.03125l-20.402344-20.402344v-56.648437h67.832031v56.648437zm82.832031 0h-27.03125l-20.398437-20.402344v-56.648437h67.832031v56.648437zm103.234375-20.402344-20.402344 20.402344h-27.027344l-20.402343-20.402344v-56.648437h67.832031zm-482-71.648437v-13.671875l20.789062-22.34375h440.421876l20.789062 22.34375v13.671875zm0 0"/><path d="m486.480469 165.074219h15v192.082031h-15zm0 0"/><path d="m10.996094 165.554688h15v191.601562h-15zm0 0"/><path d="m76.464844 171.066406h-15l.046875 176.578125h216.316406l-.050781-178.8125-15 .003907.046875 163.808593h-186.316407zm0 0"/><path d="m450.0625 171.066406h-15v198.585938h-106.992188v-198.585938h-15v198.585938h-313.070312v50.4375h512v-50.4375h-61.9375zm46.9375 213.589844v20.433594h-482v-20.433594zm0 0"/><path d="m425.0625 355.738281h-15v-50.484375h15zm0-60.484375h-15v-15h15zm0-25h-15v-15h15zm0 0" fill="#fff"/><path d="m250.433594 185.601562h-57.933594v-15h57.933594zm-67.933594 0h-15v-15h15zm-25 0h-15v-15h15zm0 0" fill="#fff"/><path d="m477 41.515625h-212.417969v-15h212.417969zm-222.417969 0h-15v-15h15zm-25 0h-15v-15h15zm0 0" fill="#fff"/> </g>
                </svg>
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