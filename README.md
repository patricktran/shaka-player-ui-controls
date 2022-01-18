# shaka-player-ui-controls
The missing UI controls package for Google [Shaka Player](https://github.com/google/shaka-player)! <br/>Vertical volume slider, rewind, and fast forward controls.  

[![NPM](https://img.shields.io/npm/v/shaka-player-ui-controls.svg)](https://www.npmjs.com/package/shaka-player-ui-controls) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<br />

![screenshot](/shaka-player-ui-controls-screenshot.png?raw=true)

<br />

## Install  

```bash
npm install --save shaka-player-ui-controls
```

⚠️ Also install [**Shaka Player**](https://www.npmjs.com/package/shaka-player) - [Shaka Player Documentation](https://shaka-player-demo.appspot.com/docs/api/tutorial-welcome.html)  

![screenshot](/shaka-player-logo.png?raw=true)

<br />

## UI Controls Included  

* **Vertical Volume Slider**

* **Rewind**: 
  - 5 Seconds
  - 10 Seconds
  - 30 Seconds

* **Fast Forward**: 
  - 5 Seconds
  - 10 Seconds
  - 30 Seconds

<br />

## Demo  

Click [here](https://codesandbox.io/s/shaka-player-ui-controls-h2y49-h2y49) to see a demo on [codesandbox](https://codesandbox.io/s/shaka-player-ui-controls-h2y49-h2y49).

<br />

## Usage  

```js

//step 1) import packages/css

import {
  Player as ShakaPlayer,
  ui as ShakaUI,
} from "shaka-player/dist/shaka-player.ui";

import "shaka-player/dist/controls.css";

import {
  ForwardFiveButton,
  ForwardTenButton,
  ForwardThirtyButton,
  RewindFiveButton,
  RewindTenButton,
  RewindThirtyButton,
  VerticalVolume,
} from "shaka-player-ui-controls";

import "shaka-player-ui-controls/dist/main.css";

//step 2) register control elements to ShakaUI

//vertical volume control
ShakaUI.Controls.registerElement(
  "vertical_volume",
  new VerticalVolume.Factory()
);

//rewind controls
ShakaUI.Controls.registerElement("rewind_5", new RewindFiveButton.Factory());
ShakaUI.Controls.registerElement("rewind_10", new RewindTenButton.Factory());
ShakaUI.Controls.registerElement("rewind_30", new RewindThirtyButton.Factory());

//fast forward controls
ShakaUI.Controls.registerElement("forward_5", new ForwardFiveButton.Factory());
ShakaUI.Controls.registerElement("forward_10", new ForwardTenButton.Factory());
ShakaUI.Controls.registerElement(
  "forward_30",
  new ForwardThirtyButton.Factory()
);

//step 3) create your custom ui config
//https://shaka-player-demo.appspot.com/docs/api/tutorial-ui-customization.html

const uiConfig = {
  controlPanelElements: [
    "rewind_30",
    "rewind_10",
    "rewind_5",
    "play_pause",
    "forward_5",
    "forward_10",
    "forward_30",
    "vertical_volume",
  ],
};

...

//step 4) pass in your custom ui config to shaka player

//getting reference to video and video container on DOM
const video = document.getElementById('video');
const videoContainer = document.getElementById('video-container');

//initialize shaka player
var player = new ShakaPlayer(video);

//setting up shaka player UI overlay
const ui = new ShakaUI.Overlay(player, videoContainer, video);

//pass in custom uiConfig
ui.configure(uiConfig);
```
## License

MIT © [patricktran](https://github.com/patricktran)
