import { Hero, SubscribeEmail } from '../components';
import img from '../assets/hero-images/teachers-undraw.svg';
import { teachers } from '../assets/teachers';
import { TeacherCard } from '../components';

const Teachers = () => {
  return (
    <>
      <Hero img={img} title="Meet Our Team!" />

      <section className="container mt-20 m-auto flex flex-col gap-8">
        {teachers.map((teacher) => {
          return <TeacherCard key={teacher.id} {...teacher} />;
        })}
      </section>

      <SubscribeEmail />
    </>
  );
};
export default Teachers;
