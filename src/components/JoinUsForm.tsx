import { Form } from 'react-router-dom';
import FormRow from './FormRow';

const JoinUsForm = () => {
  return (
    <section className="container m-auto ">
      <Form
        method="post"
        className="px-12 py-8 bg-white text-slate-800 m-auto flex flex-col justify-center items-center gap-4 w-[35%] min-w-[350px]"
      >
        <h3 className="font-bold text-2xl">Join Us</h3>
        <div className="flex flex-col gap-4 w-full">
          <FormRow type="text" name="name" labelText="Name" />
          <FormRow type="text" name="lastName" labelText="Last Name" />
          <FormRow type="text" name="location" labelText="Location" />
          <FormRow type="email" name="email" labelText="Email" />
          <FormRow type="password" name="password" labelText="Password" />
        </div>
      </Form>
    </section>
  );
};
export default JoinUsForm;