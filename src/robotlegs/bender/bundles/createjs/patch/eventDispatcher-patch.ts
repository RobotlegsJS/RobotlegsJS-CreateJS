// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

/**
 * Patch PIXI event handling.
 *
 * - Proxy PIXI events to be compatible with EventDispatcher
 * - Implements event bubbling on `dispatchEvent` when `bubbles` is true.
 */

const EventDispatcherMixin = {
    once(type: string, listener: Function, thisObject?: any, useCapture?: boolean, priority?: number): void {
        this.on(type, listener, thisObject, true, null, useCapture);
    }
};

Object.assign(createjs.EventDispatcher.prototype, EventDispatcherMixin);
