import { Link } from 'react-router-dom';

import Icon from './Icon';
import { socials } from '../assets/socials';
import { links } from '../assets/links';
import { FaPhone } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <section className="py-8 border-amber-400 border-t ">
      <footer className="container m-auto flex justify-center text-slate-900 ">
        <div className="w-[33%] flex flex-col gap-6 px-12 ">
          <Icon />
          <div className="flex mb-4 min-h-[40px]">
            <p className="font-semibold ">
              Skillwise.com is a user-friendly platform that provides
              individuals with the opportunity to improve themselves and acquire
              new skills.
            </p>
          </div>
          <div>
            <p className="font-semibold mb-2">© SkillWise</p>
            <p className="font-semibold">All rights reserved</p>
          </div>
        </div>

        <div className="w-[33%] flex flex-col gap-6 px-12 ">
          <h1 className="font-bold text-xl min-h-[40px] flex items-center">
            Navigate
          </h1>
          <ul className="flex flex-col gap-4">
            <li>
              <Link className="font-semibold" to="/">
                Home
              </Link>
            </li>
            {links.map(({ name, href }) => {
              return (
                <li key={name}>
                  <Link className="font-semibold" to={href}>
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-[33%] flex flex-col gap-6 px-12">
          <h1 className="font-bold text-xl min-h-[40px] flex items-center">
            Contact Us
          </h1>

          <div className="flex items-center">
            <IoMdMail className=" hover:text-amber-600 text-xl transition" />
            <a
              href="mailto:skillwise@skillwise.com"
              className="font-semibold ml-4"
            >
              skillwise@skillwise.com
            </a>
          </div>

          <div className="flex items-center">
            <FaPhone className=" hover:text-amber-600 text-xl" />
            <a
              href="https://web.whatsapp.com/"
              className="font-semibold ml-4 transition"
            >
              +1 555 555 55 55
            </a>
          </div>

          <div className="flex gap-8">
            {socials.map((social) => {
              return (
                <Link
                  to={social.link}
                  key={social.name}
                  target="blank"
                  className="text-2xl  hover:text-amber-600 transition"
                >
                  {social.icon}
                </Link>
              );
            })}
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
