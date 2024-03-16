import FormRow from './FormRow';
import { SubmitButton } from '.';

const JoinUsForm = () => {
  return (
    <section className="container m-auto my-16">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="lg:px-12 lg:py-8 p-4 bg-white text-slate-800 m-auto flex flex-col 
        border-t-4 border-amber-400 rounded justify-center items-center gap-4 w-[40%] 
        min-w-[330px] shadow"
      >
        <h3 className="font-bold text-2xl">Join Us</h3>
        <div className="flex flex-col gap-4 w-full">
          <FormRow type="text" name="name" labelText="Name" />
          <FormRow type="text" name="lastName" labelText="Last Name" />
          <FormRow type="text" name="location" labelText="Location" />
          <FormRow type="email" name="email" labelText="Email" />
        </div>
        <SubmitButton />
      </form>
    </section>
  );
};
export default JoinUsForm;
