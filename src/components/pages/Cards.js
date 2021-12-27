import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our recent projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Check out our Cildren Bedrooms'
              label='Children Bedroom'
              path='/children-bedrooms'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Check out our master Bedrooms'
              label='Master Bedroom'
              path='/master-bedroom'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-home.jpg'
              text='chek out our kitchen interiors'
              label='Kitchen Interior'
              path='/kitchen-interiors'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Check out our hall interiors'
              label='Hall Interiors'
              path='/hall-interiors'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Check out our elevations'
              label='Elevations'
              path='/elevations'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
