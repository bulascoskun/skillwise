import { useNavigation } from 'react-router-dom';

const ProfileSubmitButton = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="bg-amber-500  hover:bg-amber-600 text-slate-800 hover:text-white
    rounded-[10rem] font-semibold transition mt-auto py-2 px-4"
    >
      {isSubmitting ? 'Updating...' : 'Update'}
    </button>
  );
};
export default ProfileSubmitButton;
