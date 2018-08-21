RobotlegsJS CreateJS Extension
===

[![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/RobotlegsJS/RobotlegsJS-CreateJS/blob/master/LICENSE)
[![Gitter chat](https://badges.gitter.im/RobotlegsJS/RobotlegsJS.svg)](https://gitter.im/RobotlegsJS/RobotlegsJS)
[![Build Status](https://travis-ci.org/RobotlegsJS/RobotlegsJS-CreateJS.svg?branch=master)](https://travis-ci.org/RobotlegsJS/RobotlegsJS-CreateJS)
[![codebeat badge](https://codebeat.co/badges/e8be9dff-117b-436d-92c4-1b91aed35e33)](https://codebeat.co/projects/github-com-robotlegsjs-robotlegsjs-createjs-master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e8d37f3f011c6d211083/test_coverage)](https://codeclimate.com/github/RobotlegsJS/RobotlegsJS-CreateJS/test_coverage)
[![npm version](https://badge.fury.io/js/%40robotlegsjs%2Fcreatejs.svg)](https://badge.fury.io/js/%40robotlegsjs%2Fcreatejs)
[![Greenkeeper badge](https://badges.greenkeeper.io/RobotlegsJS/RobotlegsJS-CreateJS.svg)](https://greenkeeper.io/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Integrate [RobotlegsJS](https://github.com/RobotlegsJS/RobotlegsJS)
framework with [CreateJS](https://createjs.com).

Installation
---

You can get the latest release and the type definitions using [NPM](https://www.npmjs.com/):

```bash
npm install @robotlegsjs/createjs --save
```

Or using [Yarn](https://yarnpkg.com/en/):

```bash
yarn add @robotlegsjs/createjs
```

The [EaselJS](https://github.com/CreateJS/EaselJS) dependency is added as **peerDependencies**,
allowing the final user to choose the desired version of the [easeljs](https://www.npmjs.com/package/easeljs) library on each project.

The `@robotlegsjs/createjs` package is compatible with versions between the `>=1.0.2 <2` version range of `easeljs` library.

As example, when you would like to use the version `1.0.2` of `easeljs` library, you can run:

```bash
npm install easeljs@1.0.2 reflect-metadata --save
```

or

```bash
yarn add easeljs@1.0.2 reflect-metadata
```

Then follow the [installation instructions](https://github.com/RobotlegsJS/RobotlegsJS/blob/master/README.md#installation) of **RobotlegsJS** library to complete the setup of your project.

**Dependencies**

+ [RobotlegsJS](https://github.com/RobotlegsJS/RobotlegsJS)
+ [tslib](https://github.com/Microsoft/tslib)

**Peer Dependencies**

+ [EaselJS](https://github.com/CreateJS/EaselJS)
+ [reflect-metadata](https://github.com/rbuckton/reflect-metadata)

Usage
---

```typescript
/// <reference path="../definitions/createjs.d.ts" />

import "reflect-metadata";

import { Context, MVCSBundle } from "@robotlegsjs/core";

import { ContextView, CreateJSBundle } from "@robotlegsjs/createjs";

import { MyConfig } from "./config/MyConfig";

import { RobotlegsView } from "./view/RobotlegsView";

export class Game {

    private _canvas: HTMLCanvasElement;
    private _stage: createjs.Stage;

    private _context: Context;

    constructor () {
        this.init();
    }

    private init(): void {
        this._canvas = <HTMLCanvasElement>(document.getElementById("canvas"));
        this._stage = new createjs.Stage(this._canvas);

        this._context = new Context();
        this._context.install(MVCSBundle, CreateJSBundle).
            configure(new ContextView(this._stage)).
            configure(MyConfig).
            initialize();

        // enable touch interactions if supported on the current device:
        createjs.Touch.enable(this._stage);

        // enabled mouse over / out events
        this._stage.enableMouseOver(10);
        this._stage.mouseMoveOutside = true; // keep tracking the mouse even when it leaves the canvas

        let robotlegs: RobotlegsView = new RobotlegsView();

        robotlegs.x = this._canvas.width / 2;
        robotlegs.y = this._canvas.height / 2;

        this._stage.addChild(robotlegs);

        window.addEventListener("resize", this.handleResize.bind(this));
        createjs.Ticker.addEventListener("tick", this.tick.bind(this));
    }

    private handleResize(): void {
        this._stage.update();
    }

    private tick(event: Object): void {
        this._stage.update(event);
    }
}
```

[See full example here](example/index.ts)

Running the example
---

Run the following commands to run the example:

```bash
npm install
npm start
```

or:

```bash
yarn install
yarn start
```

License
---

[MIT](LICENSE)
