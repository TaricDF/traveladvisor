import React from 'react';
import '../App.css';
import { Button } from './Button';
import './BodySection.css';

function BodySection() {
  return (
    <div className='body-container'>
      <h1>#Placeholder#</h1>
      <p>#Placeholder#</p>
      <div>
        <input placeholder="Enter Post Title"/>
      </div>
    </div>
  );
}

export default BodySection;