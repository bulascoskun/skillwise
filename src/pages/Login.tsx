import { Form, Link, NavLink, redirect } from 'react-router-dom';
import { SubmitButton, FormRow } from '../components';
import Icon from '../components/Icon';
import customFetch from '../assets/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/login', data);
    return redirect('/');
  } catch (error: any) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  return (
    <section
      className=" h-dvh flex justify-center items-center 
      bg-gradient-to-r from-amber-800 to-yellow-700"
    >
      <Form
        method="post"
        className="flex flex-col gap-8 bg-white px-6 py-8 w-96 shadow-md border-amber-500 border-t-4 rounded"
      >
        <NavLink className="m-auto" to="/">
          <Icon />
        </NavLink>

        <FormRow
          type="email"
          name="email"
          labelText="Email"
          defaultValue="test@gmail.com"
        />
        <FormRow
          type="password"
          name="password"
          labelText="Password"
          defaultValue="secret123"
        />
        <SubmitButton />

        <p className="font-semibold flex gap-2 justify-end">
          Not a member yet?
          <Link
            className="text-amber-500 hover:text-amber-400 transition"
            to="/register"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
