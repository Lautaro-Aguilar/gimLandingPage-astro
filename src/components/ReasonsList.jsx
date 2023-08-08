const ReasonsList = () => {
  const reasons = [
    {
      title: '15000 sq.m.',
      description:
        'A spacious gym for sports – a safe distance between exercise machines',
      icon: (
        <i
          class='fa-solid fa-ruler-combined fa-xl'
          style={{ color: 'yellow' }}
        ></i>
      ),
    },
    {
      title: 'More than 200 equipment',
      description:
        'No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.',
      icon: (
        <i class='fa-solid fa-dumbbell fa-xl' style={{ color: 'yellow' }}></i>
      ),
    },
    {
      title: '4 fitness zones',
      description:
        'From cardio to functional and cycle. Separate area for boxing and mixed martial arts',
      icon: (
        <i
          class='fa-solid fa-person-running fa-xl'
          style={{ color: 'yellow' }}
        ></i>
      ),
    },
    {
      title: 'Round-the-clock operation',
      description:
        'The gym is open 24 hours a day, also works on all holidays and weekends',
      icon: (
        <i class='fa-regular fa-clock fa-xl' style={{ color: 'yellow' }}></i>
      ),
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
