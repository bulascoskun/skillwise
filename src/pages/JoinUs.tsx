import { Hero, JoinUsForm } from '../components';
import img from '../assets/hero-images/join-undraw.svg';

const JoinUs = () => {
  return (
    <>
      <Hero img={img} title="Are You Interested? Join Us!" />
      <JoinUsForm />
    </>
  );
};
export default JoinUs;
