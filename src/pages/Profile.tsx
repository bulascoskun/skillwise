import { Form, useLoaderData } from 'react-router-dom';
import { FormRow, ProfileSubmitButton } from '../components';
import customFetch from '../assets/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch('/user', data);
    toast.success('User updated');
    return null;
  } catch (error: any) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Profile = () => {
  const { name, username, email, location } = useLoaderData() as User;

  return (
    <section
      className="container m-auto p-8 text-slate-800 rounded-lg shadow my-16
    bg-gradient-to-r from-amber-300 to-yellow-200"
    >
      <h2 className="font-bold text-3xl mb-8">Profile</h2>
      <Form method="post" className="grid grid-cols-3 gap-y-4 gap-x-12">
        <FormRow type="text" name="name" labelText="Name" defaultValue={name} />
        <FormRow
          type="text"
          name="username"
          labelText="Username"
          defaultValue={username}
        />
        <FormRow
          type="email"
          name="email"
          labelText="Email"
          defaultValue={email}
        />
        <FormRow
          type="text"
          name="location"
          labelText="Location"
          defaultValue={location}
        />
        <ProfileSubmitButton />
      </Form>
    </section>
  );
};
export default Profile;
