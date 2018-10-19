import React, {Component} from 'react';
import styles from './singin.module.css';

import FormField from '../Widget/FormField/FormField';

class Singin extends Component {
  state = {
    registerError: '',
    loading: false,
    formData: {
      email: {
        element: 'input',
        value: '',
        config: {
          name: 'email_input',
          type: 'email',
          placeholder: 'Enter your name'
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      password: {
        element: 'input',
        value: '',
        config: {
          name: 'password_input',
          type: 'password',
          placeholder: 'Enter your password'
        },
        validation: {
          required: true,
          password: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  };

  updateForm = (element) => {
    const newFormdata = {
      ...this.state.formData
    };
    const newElement = {
      ...newFormdata[element.id]
    };
    newElement.value = element.event.target.value;

    if(element.blur){
      let validDate = this.validate(newElement)
      newElement.valid = validDate[0];
      newElement.validationMessage = validDate[1];
    }

    newElement.touched = element.blur;
    newFormdata[element.id] = newElement;

    this.setState({
      formData: newFormdata
    })
  };

  validate = (element) => {
    let error = [true, ''];

    if (element.validation.email){
      let valid = /\S+@\S+\.\S+/.test(element.value);
      const message = `${!valid ? 'Must be valid email' : ''}`;
      error = !valid ? [valid, message] : error
    }

    if (element.validation.password){
      let valid = element.value.length >= 5;
      const message = `${!valid ? 'Must be more than 4' : ''}`;
      error = !valid ? [valid, message] : error
    }

    if (element.validation.required){
      let valid = element.value.trim() !== '';
      const message = `${!valid ? 'This filed is required' : ''}`;
      error = !valid ? [valid, message] : error
    }
    return error;
  };

  submitForm = (event, type) => {
    event.preventDefault();

    if( type !== null ) {
      let dataToSubmit = {};
      let formIsValid = true;

      for( let key in this.state.formData) {
        dataToSubmit[key] = this.state.formData[key].value
      }

      for( let key in this.state.formData) {
        formIsValid  = this.state.formData[key].valid && formIsValid
      }

      if(formIsValid) {
        this.setState({
          loading: true,
          registerError: ''
        });

        if(type) {
          console.log('Login')
        } else {
          console.log('Register')
        }
      }
    }
  };

  submitButton = () => (
    this.state.loading ?
      'Loading...'
      :
      <div className={styles.flex}>
        <button onClick={(event) => this.submitForm(event, false)}>Register now</button>
        <button onClick={(event) => this.submitForm(event, true)}>Log in</button>
      </div>
  );

  render() {
    return (
      <div className={styles.logContainer}>
        <form onSubmit={(event) => this.submitForm(event, null)}>
          <h2>Register / Log in</h2>
          <FormField
            id={'email'}
            formdata={this.state.formData.email}
            change={(element) => this.updateForm(element)}
          />
          <FormField
            id={'password'}
            formdata={this.state.formData.password}
            change={(element) => this.updateForm(element)}
          />

          { this.submitButton() }
        </form>
      </div>
    );
  }
}

export default Singin;
