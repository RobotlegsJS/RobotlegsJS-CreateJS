// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IClass, EventDispatcher } from "@robotlegsjs/core";

import { IViewHandler } from "../api/IViewHandler";

import { ContainerBindingEvent } from "./ContainerBindingEvent";

/*[Event(name="bindingEmpty", type="robotlegs.bender.extensions.viewManager.impl.ContainerBindingEvent")]*/
/**
 * @private
 */
export class ContainerBinding extends EventDispatcher {
    /*============================================================================*/
    /* Public Properties                                                          */
    /*============================================================================*/

    private _parent: ContainerBinding;

    /**
     * @private
     */
    public get parent(): ContainerBinding {
        return this._parent;
    }

    /**
     * @private
     */
    public set parent(value: ContainerBinding) {
        this._parent = value;
    }

    private _container: createjs.Container;

    /**
     * @private
     */
    public get container(): createjs.Container {
        return this._container;
    }

    /*============================================================================*/
    /* Private Properties                                                         */
    /*============================================================================*/

    private _handlers: IViewHandler[] = [];

    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/

    /**
     * @private
     */
    constructor(container: createjs.Container) {
        super();
        this._container = container;
    }

    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/

    /**
     * @private
     */
    public addHandler(handler: IViewHandler): void {
        if (this._handlers.indexOf(handler) > -1) {
            return;
        }
        this._handlers.push(handler);
    }

    /**
     * @private
     */
    public removeHandler(handler: IViewHandler): void {
        let index: number = this._handlers.indexOf(handler);
        if (index > -1) {
            this._handlers.splice(index, 1);
            if (this._handlers.length === 0) {
                this.dispatchEvent(new ContainerBindingEvent(ContainerBindingEvent.BINDING_EMPTY));
            }
        }
    }

    /**
     * @private
     */
    public handleView(view: createjs.DisplayObject, type: IClass<any>): void {
        let length: number = this._handlers.length;
        for (let i: number = 0; i < length; i++) {
            let handler: IViewHandler = this._handlers[i];
            handler.handleView(view, type);
        }
    }
}
