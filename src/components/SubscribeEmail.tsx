import styled from 'styled-components';
import { LuSendHorizonal } from 'react-icons/lu';

import img1 from '../assets/teacher-images/teacher-1.jpg';
import img2 from '../assets/teacher-images/teacher-2.jpg';
import img3 from '../assets/teacher-images/teacher-3.jpg';
import img4 from '../assets/teacher-images/teacher-4.jpg';
import img5 from '../assets/teacher-images/teacher-5.jpg';
import img6 from '../assets/teacher-images/teacher-6.jpg';

const Wrapper = styled.section`
  .wrapper {
    width: 400px;
    max-width: 100%;
    position: relative;

    input {
      background: rgba(255, 255, 255, 0.3);
      border: 2px solid white;
      border-radius: 50px;
      padding: 1rem 2rem;
      width: 100%;
    }

    button {
      font-size: 1.5rem;
      color: #9c6d06;
      background-color: white;
      border-radius: 50%;
      height: 100%;
      aspect-ratio: 1;

      position: absolute;
      right: 0;
      top: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        transition: all 0.15s;
      }

      svg:hover {
        color: #d1981b;
      }
    }
  }

  .teacher-image {
    position: absolute;
    height: 80px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 50%;
  }

  .teacher-image:nth-child(3) {
    top: 5%;
    left: 15%;
  }

  .teacher-image:nth-child(4) {
    bottom: 5%;
    left: 15%;
  }

  .teacher-image:nth-child(5) {
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
  }

  .teacher-image:nth-child(6) {
    top: 5%;
    right: 15%;
  }

  .teacher-image:nth-child(7) {
    bottom: 5%;
    right: 15%;
  }

  .teacher-image:nth-child(8) {
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
  }
`;

const SubscribeEmail = () => {
  return (
    <Wrapper className="container m-auto my-20  flex flex-col justify-center relative items-center rounded-3xl py-12 bg-gradient-to-r from-amber-800 to-yellow-600  w-full">
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl w-[70%] text-center font-bold mb-6 text-slate-100">
          Subscribe to Receive Updates For Every New Course
        </p>
        <p className="text-center font-semibold mb-6 text-slate-100">
          10k+ students daily learn with SkillWise. Subscribe for news.
        </p>
      </div>
      <div className="wrapper">
        <input type="text" />
        <button>
          <LuSendHorizonal />
        </button>
      </div>

      <img src={img1} alt="Teacher 1" className="teacher-image" />
      <img src={img5} alt="Teacher 5" className="teacher-image" />
      <img src={img3} alt="Teacher 3" className="teacher-image" />
      <img src={img2} alt="Teacher 2" className="teacher-image" />
      <img src={img4} alt="Teacher 4" className="teacher-image" />
      <img src={img6} alt="Teacher 6" className="teacher-image" />
    </Wrapper>
  );
};
export default SubscribeEmail;
