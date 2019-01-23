import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../Store/actions/authAction'

class Signin extends Component{
    
    state = {
        username : '',
        password : '',

    }
    
    handleSubmit=(e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }


    handleInputChange = (e) => {
        this.setState({
        [e.target.id]: e.target.value})
    }
    
    
    
    render(){

        const { authError} =this.props
        console.log(authError)
        return(
        
                <section className="section container">
                    <h1 className="grey-text darken-1 center">Sign up</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col l6 offset-l3">
                                <div className="input-field ">
                                <i className="material-icons prefix">account_circle</i>
                                    <input type="text" className="text" id="username" onChange={this.handleInputChange}/>
                                    <label for="username">Your Username</label>
                                </div>
                            </div>
                        
                    
                            <div className="col l6 offset-l3">
                                <div className="input-field ">
                                    <i className="material-icons prefix">security</i>
                                    <input type="password" className="password" id="password" onChange={this.handleInputChange}/>
                                    <label for="password">password</label>
                                </div>
                            </div>
                            
                            <div className="col l5 offset-l3 center">
                                <div className="input-field ">
                                    <input type="submit" className="submit btn" id="submit"/>
                                </div>
                            </div>
                            <div className="col l5 offset-l3 red-text center">
                                { authError ? <p>{authError}</p>:null}
                            </div>
                            
                            
                        </div>
                    </form>
        </section> 
     

    )}
}

var mapStateToProps = (state)=>{
    return {
        authError: state.auth.authError,
    }
}

var mapDispatchToProps = ( dispatch ) =>{
    return {
        signIn :  (cred) => dispatch(signIn(cred))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Signin)