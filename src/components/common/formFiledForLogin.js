import React from "react";

const FormFieldForLogin = function(props){

    const { input, type, className, children, meta: { touched, error } } = props;
    const errorMessage = (touched && error) ? <div className="errorH"> <span><i className="fa fa-lg fa-exclamation-triangle" aria-hidden="true"></i> {error}</span> </div>: null;

    if(type.trim().toLowerCase()==="select"){

        return(
            <div className="form-field-wrapper">
                <select {...input} className={className}>
                    {children}
                </select>
                {errorMessage}
            </div>
        );
    }else {

        return(
            <div className="form-field-wrapper">
                <input {...input} type={type} className={className}/>
                {errorMessage}
            </div>
        );
    }
};



export default FormFieldForLogin;