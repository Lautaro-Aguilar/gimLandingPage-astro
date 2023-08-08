import Card from './Card';

const CardList = ({ cardData }) => {
  return (
    <>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          price={card.price}
          advantages={card.advantages}
        />
      ))}
    </>
  );
};

export default CardList;
