// SubHeading.js
import React from 'react';
import { images } from '../../constants';
import './SubHeading1.css';

const SubHeading1 = ({ title }) => (
  <div className="subheading__container">
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon1} alt="spoon_image" className="spoon__img" />

  </div>
);

export default SubHeading1;
