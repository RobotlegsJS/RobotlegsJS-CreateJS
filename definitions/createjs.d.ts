// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

/**
 * Augment CreateJS module to recognize EventDispatcher patch.
 */
declare namespace createjs {
    interface IEventDispatcher {
        once(type: string, listener: Function, thisObject?: any, useCapture?: boolean, priority?: number): void;
    }

    export interface EventDispatcher extends IEventDispatcher {}
}
