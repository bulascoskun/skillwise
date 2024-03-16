import { Form, Link, NavLink, redirect } from 'react-router-dom';
import { SubmitButton, FormRow, Icon } from '../components';
import customFetch from '../assets/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registered successfully!');
    return redirect('/login');
  } catch (error: any) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <section
      className=" h-dvh flex justify-center items-center 
      bg-gradient-to-r from-amber-800 to-yellow-700"
    >
      <Form
        method="post"
        className="flex flex-col gap-8 bg-white px-6 py-8 w-96 shadow-md border-amber-500 border-t-4 rounded mx-4"
      >
        <NavLink className="m-auto" to="/">
          <Icon />
        </NavLink>
        <FormRow type="text" name="name" labelText="Name" />
        <FormRow type="text" name="username" labelText="Username" />
        <FormRow type="email" name="email" labelText="Email" />
        <FormRow type="password" name="password" labelText="Password" />
        <SubmitButton />

        <p className="font-semibold flex gap-2 justify-end">
          Already a member?
          <Link
            className="text-amber-500 hover:text-amber-400 transition"
            to="/login"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
