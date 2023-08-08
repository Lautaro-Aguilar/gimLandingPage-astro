import { useRef, useEffect } from 'react';
import Card from './Card';
import CardList from './CardList';

const cards = [
  {
    title: 'Pass ‘Trial’ ',
    price: '$0',
    advantages: [
      'Access to the gym from 8:00 to 14:00',
      'The trainer on duty will introduce you to the gym',
    ],
  },
  {
    title: 'Pass ‘Easy Start’',
    price: '$119',
    advantages: [
      'Visit without restrictions 24/7',
      'Individual training program',
      'Access to the VTRAINER application',
      'Trainer support',
    ],
  },
  {
    title: 'Pass ‘Free Time’ ',
    price: '$49',
    advantages: [
      'The entrance time to the gym is from 14:00 to 16:00',
      'Without suspension of gym membership',
      'The trainer on duty will introduce you to the gym',
    ],
  },
  {
    title: 'Pass ‘1 Month 24/7’ ',
    price: '$85',
    advantages: [
      'Visit without restrictions 24/7',
      'The trainer on duty will introduce you to the gym',
    ],
  },
  {
    title: 'Pass ‘In Shape (AM)’ ',
    price: '$165',
    advantages: [
      'Training in mini-groups until 14:00',
      'Without suspension of gym membership',
      'Classes with a trainer in a mini-group 3 times a week',
      'Trainer support',
    ],
  },
  {
    title: 'Pass ‘In Shape (PM)’ ',
    price: '$195',
    advantages: [
      'Training in mini-groups until 17:00',
      'Without suspension of gym membership',
      'Classes with a trainer in a mini-group 3 times a week',
      'Trainer support',
    ],
  },
];

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      slider.scrollLeft = 240;
    }
  }, []);

  return (
    <section className='flex flex-col mb-40' id='Membership'>
      <h2 className='text-3xl text-white text-center pt-4 font-medium'>
        Gym membership
      </h2>
      <section className='bg-black flex justify-center items-center py-4'>
        <div
          ref={sliderRef}
          className='relative overflow-auto touch-pan-x rounded-lg flex gap-2 items-center lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-6 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-4 mx-5'
        >
          <CardList cardData={cards} />
        </div>
      </section>
    </section>
  );
};

export default Slider;
