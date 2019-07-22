import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Player from './components/Player';
import { videos } from './data/videos';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={(props) => <Player data={videos} {...props} />} />
      <Route exact path='/:activeVideo' render={(props) => <Player data={videos} {...props} />} />
    </Switch>
  </BrowserRouter>
);

export default App;
