import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react';
import { mockData } from '../../mockData';

export default function HandleInfo() {
const mockDescription = mockData.map(item =>
<div>
<p>{item.description}</p>
</div>);
    return(
        <div>
            { mockDescription }
        </div>
      )
}

/* this is ike the 10th variation I've tried. Was trying to fetch at first*/
