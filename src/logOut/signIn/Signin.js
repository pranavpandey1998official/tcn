import React, { Component } from 'react';

class Signin extends Component{
    
    state = {
        username : '',
        password : '',
        selectedOption: "producer" 

    }
    
    handleSubmit=(e) => {
        e.preventDefault();
    }

    handleOptionChange = (e) => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    handleInputChange = (e) => {
        this.setState({
        [e.target.id]: e.target.value})
    }
    
    
    render(){
        return(
        
                <section className="section container">
                    <h1 className="grey-text darken-1 center">Sign up</h1>
                    <form onSubmit={}>
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
                            
                            <div className="col l6 offset-l3">
                                <div className="input-field ">
                                    <p>
                                        <label>
                                            <input name="group1" 
                                                    type="radio" 
                                                    value="producer" 
                                                    checked = {this.state.option==="producer"}
                                                    onChange = { this.handleOptionChange }
                                        
                                             />
                                            <span>Producer</span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            <input name="group1" 
                                                    type="radio" 
                                                    value="consumer" 
                                                    checked = {this.state.option==="consumer"}
                                                    onChange = { this.handleOptionChange } />
                                            <span>Consumer</span>
                                        </label>
                                    </p>                                
                                </div>
                            </div>
                            <div className="col l5 offset-l3 center">
                                <div className="input-field ">
                                    <input type="submit" className="submit btn" id="submit"/>
                                </div>
                            </div>
                            
                        </div>
                    </form>
        </section> 
     

    )}
}

export default Signin