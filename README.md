# _[Stardew Harvest Crossing](URL_HERE)_

#### _Epicodus Project, Team Week April 27, 2020_

#### By _**Jessica Hvozdovich, Brevin Cronk, Christine Augustine, Zinfira Safargalieva, Steven Ly**_
<!-- 
![Stardew Preview](./img/preview.png)

**[View Live Preview](https://christinereina.github.io/epicodus-mrroboger/)** -->

## Description

_This webpage allows a user to care for plants using using time interval events and an interactive interface built with the Phaser JavaScript framework. We hope to be able to have our character move around the farm as a sprite. We also plan on having APIs involved in our website and making it work alongside our code. There will be fail conditions in the game, such as forgetting to take care of your pets, or allowing your plants to die, etc._

## Setup/Installation Requirements

1. Clone this repository from GitHub.
2. Open the downloaded directory in a text editor of your choice.
  (VSCode, Atom, etc.)
3. Run npm install in your terminal to download the necessary dependencies, plugins, and modules.
4. The command npm run start will build and open the compiled code in a browser of your choice using a local host.

## Known Bugs

There are no known bugs at the time of this update.
 
## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/jhvozdovich/stardew-harvest-crossing/issues) here on GitHub._

## Technologies Used

* HTML
* Git and GitHub
* JavaScript
* Webpack with Babel, ESLint, and Node Package Manager
* [Phaser](https://phaser.io/)
* Tiled

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **Game displays initial plot of land** | User Input:"Click game link” | Output: “Game begins with empty plot of land” |
| **User is able to move character sprite with keyboard** | User Input:"Hold-right arrow” | Output: “Sprite moves right” |
| **User is prevented from crossing game boundaries with keyboard** | User Input:"Hol-right arrow to fence” | Output: “Sprite is still animated but unable to move right ” |
| **User is able to plant seeds** | User Input:”Plant seed” | Output: “Planted seed display in farm grid” |

| **Plants grow according at set intervals** | User Input:”Wait 30s” | Output: “Sprout display in farm grid” |
| **User is able to harvest plants** | User Input:”Harvest” | Output: “Plant has been added to inventory” |

### Stretch goals
 Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **Game displays title screen** | User Input:”Click-Start” | Output: “Game begins with empty plot of land”” |
| **User is able to water plants** | User Input:”Water plant” | Output: “Watered dirt display in farm grid” |

## Resources 
* [Character Sprites](https://opengameart.org/content/24x32-peppercarrot-characters) by [David Revoy](https://www.davidrevoy.com/)
* [Background Sprites](https://sondanielson.itch.io/simple-farm-pack) by [sonDanielson](https://sondanielson.itch.io)


### License

This software is licensed under the MIT license.

Copyright (c) 2020 **_Jessica Hvozdovich, Brevin Cronk, Christine Augustine, Zinfira Safargalieva, Steven Ly_**