import React, { Component, useState } from 'react';
import Search from '../search/search'
import Sort from '../sort/sort'
import Form from '../form/form'
import ListItem from '../items/listItem'
import AddItem from '../items/addItems'
import Items from '../../mockdata/Items';
import Item from '../items/items';

import Slideshow from '../slideshow/slideshow';
import './main.css';

function Main(props) {

  const items = Items;

  const renderItem = () => {
    return items.map((item, index) => {
        // <Item
        //   item={item}
        //   index={index}
        // />
        console.log(items)
    });
  }

  return (
    <>
        <main id='main'>
            <div className='container'>
              {/* <Slideshow /> */}
              <div className='top'>
                <Search />
                <Sort />
                <AddItem />
                {renderItem()}
              </div>
              {/* <Item /> */}
              <Form />
              <ListItem/>
            </div>
        </main>
    </>
  );

}

export default Main;
