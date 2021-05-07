import React, { useState, useEffect } from 'react';
import Card from '../card/card';
import Separator from '../images/separator1.png';

const ScrollCard: React.FC<({items: Array<{image: string, description: string, longDescription: string}>})> = ({items}) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [expandDesc, setExpandedDesc] = useState(false);
  const changeCurrentCardBoundedLeft = () => {
    if (currentCard <= 0) setCurrentCard(items.length - 1);
    else setCurrentCard(currentCard - 1);
  }
  const changeCurrentCardBoundedRight = () => {
    if (currentCard >= items.length -1) setCurrentCard(0);
    else setCurrentCard(currentCard + 1);
  }
  const toggleDescription = () => setExpandedDesc(!expandDesc);
  useEffect(() => {
    setCurrentCard(0);
  }, [items]);
  console.log(items, currentCard);
  return (
    <div className="CardDescriptionContainer">
      <Card 
        description={currentCard < items.length ? items[currentCard].description : items[0].description} 
        imageName={currentCard < items.length ? items[currentCard].image : items[0].description}
        changeCardLeft={changeCurrentCardBoundedLeft}
        changeCardRight={changeCurrentCardBoundedRight} 
        expandDescription={toggleDescription}
      />
      <div className={`LongCardDescription${expandDesc ? '' : 'Hidden'}`}>
        <div className={`CardDescriptionFlexContainer`}>
          <div className={`CardDescriptionContainer`}>
            {items[currentCard].longDescription}
          </div>
          <div className="CardDescriptionDecorator">
            <img alt="Separator" src={Separator} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollCard;