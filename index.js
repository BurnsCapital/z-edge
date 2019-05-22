import React from 'react';
import { AppRegistry,LiveEnvCamera } from 'react-360';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './continuity-xr/reducers'

import { Tray, Front } from './continuity-xr/zones';

const store = createStore(rootReducer);

const FrontView = () =>
    <Provider store={store}>
       <Front />
    </Provider>;

const TrayView = () =>
    <Provider store={store}>
       <Tray />
    </Provider>;

//pass through to app reg

AppRegistry.registerComponent('TrayZone', () => TrayView);
AppRegistry.registerComponent('FrontZone', () => FrontView);
