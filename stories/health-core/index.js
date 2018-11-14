import React from 'react';

import '../../assets/styles/index.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

storiesOf('Stat Tile', module)
    .add('Loading', () => (
        <div className="p-4 bg-grey-light h-screen">
          
          <div className="p-4 rounded-lg bg-white shadow-lg w-64 h-32 bg-blue text-white">Loading...</div>

        </div>
    ));
