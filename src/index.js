import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import configureStore from "./redux/store";
import { Provider } from "react-redux";

const store = configureStore();

const Index = () => {
  return(
    <Provider store={store}>
      <App/>
    </Provider>
  );
};
ReactDOM.render(
  <Index/>,
  document.getElementById("root")
);
