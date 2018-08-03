import validate from "validate.js";

const FormValidator = function(constraints){
    return function (values) {
        let errors  = validate(values, constraints) || {};
        return errors;
    };
};

export default FormValidator;