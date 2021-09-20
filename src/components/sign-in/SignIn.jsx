import React, { Component } from 'react'
import './signIn.scss'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch(err){
            console.log(err);
        }
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Already have an account?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                      name="email" 
                      type="email" 
                      value={this.state.email} 
                      onChange={this.handleChange} 
                      label="email" 
                      required/>

                    <FormInput 
                      name="password" 
                      type="password" 
                      value={this.state.password} 
                      required 
                      onChange={this.handleChange} label="password"/>
                    
                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
