import React from 'react';
import { FaDumbbell, FaRulerCombined } from 'react-icons/fa';
import { GiJumpingRope } from 'react-icons/Gi';
import { IoMdClock } from 'react-icons/Io';

const ReasonsList = () => {
  const reasons = [
    {
      title: '15000 sq.m.',
      description:
        'A spacious gym for sports – a safe distance between exercise machines',
      icon: <FaRulerCombined size={40} color='yellow' />,
    },
    {
      title: 'More than 200 equipment',
      description:
        'No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.',
      icon: <FaDumbbell size={40} color='yellow' />,
    },
    {
      title: '4 fitness zones',
      description:
        'From cardio to functional and cycle. Separate area for boxing and mixed martial arts',
      icon: <GiJumpingRope size={40} color='yellow' />,
    },
    {
      title: 'Round-the-clock operation',
      description:
        'The gym is open 24 hours a day, also works on all holidays and weekends',
      icon: <IoMdClock size={40} color='yellow' />,
    },
  ];
  return (
    <ul className='grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-4'>
      {reasons.map((reason) => (
        <li className='mb-6 text-left flex justify-center mx-auto px-10'>
          <article className='flex mx-auto items-center'>
            <figure className=' px-5 '>{reason.icon}</figure>
            <section className='flex flex-col gap-2'>
              <header>
                <h3 className='text-lg font-semibold'>{reason.title}</h3>
              </header>
              <footer className='sm:max-w-md'>
                <p className='text-sm font-light'>{reason.description}</p>
              </footer>
            </section>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default ReasonsList;
