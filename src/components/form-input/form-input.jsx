import { FormInputLabel, Input, Group } from "./form-input.styles";

export default function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel 
        shrink={otherProps.value.length}
        // className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
//https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/
