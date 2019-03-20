import React from 'react';
import M from 'materialize-css';
import {changePrice} from '../../../Store/actions/orderAction';
import {connect} from 'react-redux';

class Order extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            marketPrice: this.props.item.marketPrice,
            ourPrice : this.props.item.price
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

componentDidMount(){
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems);
}

handleSubmit(event) {
    event.preventDefault();
    const {marketPrice,ourPrice} =this.state
    if(marketPrice==""||ourPrice==""){
        alert("Feilds cannot be empty");
    }else{
        this.props.changePrice({
            id:this.props.item.id,
            price:ourPrice,
            marketPrice:marketPrice,
        })
    }
}

handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
}

render(){
    const {props} = this;
    const {marketPrice,ourPrice} =this.state
    return(
        <>
            <a className="modal-trigger" href={"#"+props.item.id}>
                    <div class="col s12 m12">
                        <div class="card horizontal ">
                            <div class="card-image ">
                                <img src={"/photoOfCrop/"+props.item.name+".jpg"} className="responsive-img" alt=""/>
                            </div>
                            <div class="card-stacked">
                                <div className="card-title">
                                    <div className="row" style={{margin:0}}>               
                                        <h3 className="firstLetter"> <blockquote>{props.name}</blockquote></h3> 
                                    </div>
                                </div>
                                <div class="card-content" >
                                    <div className="row">
                                        <div className="btn red"> Our Price {props.item.price}&#8377;</div>
                                        <div className="btn yellow lighten-2 black-text"> Market Price {props.item.marketPrice}&#8377;</div>
                                    </div>                
                                </div>
                            </div>
                        </div>
                </div>
            </a>
            <div id={props.item.id} className="modal">
                <div className="modal-content">
                    <h3>Set Current market price</h3>
                    <form class="col s12">
                        <div class="row">
                            <div className="col offset-m2 m4 s12">
                                <h5>Our Price</h5>
                            </div>
                            <div class="input-field col m6 s12">
                                <input id="ourPrice" name="ourPrice" type="number" className="validate" value={ourPrice} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col offset-m2 m4 s12">
                            <h5>Market Price</h5>
                        </div>
                            <div class="input-field col m6 s12">
                                <input id="marketPrice" name="marketPrice" type="number" className="validate" value={marketPrice} onChange={this.handleChange}/>
                            </div>
                        </div>
                    </form>
                </div>
               <div className="row container">
                    <div onClick={this.handleSubmit} class="modal-close green btn-flat right">Agree</div>
                </div>
            </div>
        </>
    )
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePrice : (item) => dispatch(changePrice(item))
    }
}
export default connect(null,mapDispatchToProps)(Order)