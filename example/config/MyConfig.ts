// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { inject, injectable, IConfig } from "@robotlegsjs/core";

import { IMediatorMap } from "../../src/index";

import { RobotlegsMediator } from "../mediator/RobotlegsMediator";
import { SmileyMediator } from "../mediator/SmileyMediator";

import { RobotlegsView } from "../view/RobotlegsView";
import { SmileyView } from "../view/SmileyView";

@injectable()
export class MyConfig implements IConfig {
    @inject(IMediatorMap)
    private _mediatorMap: IMediatorMap;

    public configure(): void {
        this._mediatorMap.map(RobotlegsView).toMediator(RobotlegsMediator);
        this._mediatorMap.map(SmileyView).toMediator(SmileyMediator);
    }
}
