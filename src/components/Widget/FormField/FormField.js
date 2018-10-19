import React from 'react';
import styles from './formField.module.css';

const FormField = ({formdata, id, change}) => {
  const showError = () => {
    let errorMessage = null;

    if(formdata.validation && !formdata.valid){
        errorMessage = formdata.validationMessage
    }

    return errorMessage
  };

  const renderTemplated = () => {
      let formTemplade = null;

      switch (formdata.element) {
        case('input'):
          formTemplade = (
            <div>
              <input
                {...formdata.config}
                value={formdata.value}
                onBlur={(event) => change({event, id, blur: true})}
                onChange={(event) => change({event, id, blur: false})}
              />
              <div className={styles.labelError}>
                { showError() }
              </div>
            </div>
          );
          break;
        default:
          formTemplade = null;
      }

      return formTemplade
  };

  return (
    <div>
      {renderTemplated()}
    </div>
  );
};

export default FormField;
