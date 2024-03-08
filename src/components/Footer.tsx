import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa6';
import Icon from './Icon';

const socials = [
  {
    name: 'facebook',
    icon: <FaFacebook />,
  },
  {
    name: 'instagram',
    icon: <FaInstagram />,
  },
  {
    name: 'twitter',
    icon: <FaTwitter />,
  },
  {
    name: 'linkedin',
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <section className="py-8">
      <footer className="container m-auto flex justify-center">
        <div className="w-[33%] flex flex-col gap-6 ">
          <Icon />
          <div className="flex mb-6">
            {socials.map((social) => {
              return (
                <span key={social.name} className="text-2xl">
                  {social.icon}
                </span>
              );
            })}
          </div>
          <div>
            <p className="font-semibold mb-2">© SkillWise</p>
            <p className="font-semibold">All rights reserved</p>
          </div>
        </div>

        <div className="w-[33%] flex flex-col">
          <h1>Navigate</h1>
        </div>

        <div className="w-[33%] flex flex-col">
          <h1>Contact Us</h1>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
