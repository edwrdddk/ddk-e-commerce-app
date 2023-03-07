import "./form-input.scss";

export default function FormInput({ label, ...otherProps }) {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)}
    </div>
  );
};


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
//https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/