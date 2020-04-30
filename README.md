# _[Stardew Harvest Crossing](https://ecstatic-franklin-edce6b.netlify.app/)_

#### _Epicodus Project, Team Week April 30, 2020_

#### By _**Jessica Hvozdovich, Brevin Cronk, Christine Augustine, Zinfira Safargalieva, Steven Ly**_

![Stardew Preview](./src/assets/stardew.png)

**[Play Game](https://ecstatic-franklin-edce6b.netlify.app/)**
_It does take a minute to load on netlify!_

## Description

_This webpage allows a user to care for plants using using time interval events and an interactive interface built with the Phaser JavaScript framework. We hope to be able to have our character move around the farm as a sprite. We also plan on having APIs involved in our website and making it work alongside our code. There will be fail conditions in the game, such as forgetting to take care of your pets, or allowing your plants to die, etc._

## Setup/Installation Requirements

1. Clone this repository from GitHub.
2. Open the downloaded directory in a text editor of your choice.
  (VSCode, Atom, etc.)
3. Run npm install in your terminal to download the necessary dependencies, plugins, and modules.
4. The command npm start will build and open the compiled code in a browser of your choice using a local host.

## Known Bugs

Working on mechanics to block character motion on house, tree, fence, and toolbar.
 
## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/jhvozdovich/stardew_harvest_crossing/issues) here on GitHub._

## Technologies Used

* HTML
* Git and GitHub
* JavaScript
* Webpack with Node Package Manager
* [Phaser](https://phaser.io/)
* [Tiled](https://www.mapeditor.org/)

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **Game displays initial logo title screen** | User Input:"Click” | Output: “Game begins with empty plot of land” |
| **User is able to move character sprite with keyboard** | User Input:"Hold-right arrow” | Output: “Sprite moves right” |
| **User is prevented from crossing game boundaries with keyboard** | User Input:"Hol-right arrow to fence” | Output: “Sprite is still animated but unable to move right ” |
| **User is able to plant seeds** | User Input:”Click-seed button Click-dirt tile” | Output: “Planted seed display in farm grid” |
| **User is able to water plants** | User Input:”Water plant” | Output: “Watered dirt display in farm grid” |
| **User is able to select a sickle to harvest crops** | User Input:”Click-Sickle, Click-Plant” | Output: “Crop total +1” |
| **User is able to select a watering can to water crops** | User Input:”Click-Watering can, Click-Plant” | Output: “Watered dirt image displays” |
| **Plants grow according at set intervals if it has been watered** | User Input:”Wait 15s & Watered” | Output: “Sprout display in farm grid” |
| **User is able to harvest plants** | User Input:”Click-plant” | Output: “Crop total +1” |
| **User is able to collect eggs from a chicken** | User Input:”Click-Egg” | Output: “Egg total += 1” |

### Stretch goals
 Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **User is able to select a shovel to return to grass tile** | User Input:”Click-Shovel, Click-Dirt” | Output: “Dirt becomes grass tile” |
| **User is able to collect apples from a tree** | User Input:”Click-Apple” | Output: “Apple total += 1” |


## Resources 
* [Character Sprites](https://opengameart.org/content/24x32-peppercarrot-characters) by [David Revoy](https://www.davidrevoy.com/)
* [Background and Farm Tiles](https://sondanielson.itch.io/simple-farm-pack) by [sonDanielson](https://sondanielson.itch.io)
* [Crop Tiles](https://opengameart.org/content/lpc-farming-tilesets-magic-animations-and-ui-elements) by Daniel Eddeland
* [Watering Can](https://stardewvalley.fandom.com/wiki/Watering_Can) from Stardew Valley
* [Scythe](https://stardewvalley.fandom.com/wiki/Scythe) from Stardew Valley
* [Music](http://stardew-valley-mines-themes.mp3kurt.net/) Mines Theme from Stardew Valley


### License

This software is licensed under the MIT license.

Copyright (c) 2020 **_Jessica Hvozdovich, Brevin Cronk, Christine Augustine, Zinfira Safargalieva, Steven Ly_**