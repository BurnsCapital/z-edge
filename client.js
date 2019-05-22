// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  
  // create zones 
  
  //user tray
  const trayZone = new Surface(780, 140, Surface.SurfaceShape.Flat);
  trayZone.setAngle(0, -Math.PI / 6);
  
  //main zones
  const frontZone = new Surface(940, 350, Surface.SurfaceShape.Cylinder);
  frontZone.setAngle(0, 0);

  //create half face zones
  
  //render everything to zones
  
  r360.renderToSurface( r360.createRoot('FrontZone',{ }), frontZone,);
  r360.renderToSurface( r360.createRoot('TrayZone',{ }), trayZone,);

  //recenter the floating tray
  setInterval(()=> {
    const cameraQuat = r360.getCameraQuaternion();
    trayZone.recenter(cameraQuat, 'yaw');
   },100);

   
   // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
  
}

window.React360 = {init};
