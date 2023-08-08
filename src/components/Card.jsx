import { BsCheckCircle } from 'react-icons/bs';

const Card = ({ title, price, advantages }) => {
  return (
    <article className='w-full max-w-[275px] max-h-[410px] min-w-[275px] overflow-hidden rounded-lg flex flex-col gap-px my-5'>
      <header className='header text-white text-center bg-[#222222] rounded-ss-xl rounded-se-xl py-4'>
        <h3 className='text-xl font-medium '>{title}</h3>
        <p className='text-2xl font-normal'>{price}</p>
      </header>
      <footer className='footer bg-[#222222] rounded-es-xl rounded-ee-xl text-center px-2'>
        <ul className='space-y-5 px-4 py-8 text-left min-h-[250px]'>
          {advantages?.map((advantage, index) => (
            <li className='flex gap-3 items-center' key={index}>
              <BsCheckCircle color='white' className='flex-shrink-0 w-5 h-5' />
              <span className='text-sm font-light leading-tight text-white'>
                {advantage}
              </span>
            </li>
          ))}
        </ul>
        <div className='pb-20'>
          <button
            type='button'
            className='text-black bg-[#FAFF00] hover:bg-yellow-300 font-normal rounded-full text-sm px-5 py-2 inline-flex justify-center w-32 text-center mb-8'
          >
            Buy
          </button>
        </div>
      </footer>
    </article>
  );
};

export default Card;
