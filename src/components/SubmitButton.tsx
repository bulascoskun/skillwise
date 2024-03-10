import { useNavigation } from 'react-router-dom';

const SubmitButton = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="bg-amber-400  hover:bg-amber-500 text-slate-700 hover:text-white
    rounded-[10rem] font-semibold transition py-2 px-8 ml-auto"
    >
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  );
};
export default SubmitButton;
