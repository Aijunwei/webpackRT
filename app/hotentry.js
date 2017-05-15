import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import China from './components/china';
import { AppContainer } from 'react-hot-loader';
import $ from 'jquery';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(China);

// Hot Module Replacement API
if (module.hot) {
    console.log(module.hot);
  module.hot.accept('./components/china.js', () => {
      console.log('update');
    render(China)
  });
}
