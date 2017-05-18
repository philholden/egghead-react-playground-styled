import React from 'react';
import { render } from 'react-dom';
import Playground from './elemental-playground';


const App = () => (
  <div>
    <h2>Elemental Buttons</h2>
    <Playground
      defaultValue={`<Button>Click</Button>`}
    />
    <Playground
      defaultValue={`<Button type="primary">Click</Button>`}
    />
    <Playground
      defaultValue={`<Button type="warning">Click</Button>`}
    />
    <Playground
      defaultValue={`<Button type="danger">Click</Button>`}
    />
    
  </div> 
);

render(
  <App />,
  document.getElementById('root')
);
