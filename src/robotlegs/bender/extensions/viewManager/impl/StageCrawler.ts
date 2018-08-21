// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IClass } from "@robotlegsjs/core";

import { IDisplayObject } from "../../contextView/api/IDisplayObject";
import { IDisplayObjectContainer } from "../../contextView/api/IDisplayObjectContainer";

import { ContainerBinding } from "./ContainerBinding";

/**
 * @private
 */
export class StageCrawler {
    /*============================================================================*/
    /* Private Properties                                                         */
    /*============================================================================*/

    private _binding: ContainerBinding;

    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/

    /**
     * @private
     */
    constructor(containerBinding: ContainerBinding) {
        this._binding = containerBinding;
    }

    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/

    /**
     * @private
     */
    public scan(container: IDisplayObjectContainer): void {
        this.scanContainer(container);
    }

    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/

    private scanContainer(container: IDisplayObjectContainer): void {
        this.processView(container);

        container.children.forEach((child: IDisplayObject) => {
            if ((<IDisplayObjectContainer>child).children !== undefined) {
                this.scanContainer(<IDisplayObjectContainer>child);
            } else {
                this.processView(child);
            }
        });
    }

    private processView(view: IDisplayObject): void {
        this._binding.handleView(view, <IClass<any>>view.constructor);
    }
}
