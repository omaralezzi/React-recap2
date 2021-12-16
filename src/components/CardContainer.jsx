import Card from './Card';

import data from '../data/data';

const CardContainer = () => {
  const dataList = data.map(({ id, image, title }) => (
    <Card key={id} img={image} title={title} />
  ));

  return <section className='card-container'>{dataList}</section>;
};

export default CardContainer;
