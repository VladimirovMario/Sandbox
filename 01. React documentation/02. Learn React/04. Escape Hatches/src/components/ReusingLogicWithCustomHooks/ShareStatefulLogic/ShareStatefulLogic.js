import { useFormInput } from '../hooks/useFormInput';

export default function ShareStatefulLogic() {
  return (
    <>
      <h2>Custom Hooks let you share stateful logic, not state itself</h2>
      <Form />
    </>
  );
}

function Form() {
  const firstNameProps = useFormInput('Mary');
  const lastNameProps = useFormInput('Poppins');

  // console.log(firstNameProps);
  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
}
