// ------------------------------------------------------------------------------
//  Copyright (c) 2017-present, RobotlegsJS. All Rights Reserved.
//
//  NOTICE: You are permitted to use, modify, and distribute this file
//  in accordance with the terms of the license agreement accompanying it.
// ------------------------------------------------------------------------------

import { IClass, IEvent } from "@robotlegsjs/core";

import { IDisplayObjectContainer } from "../../contextView/api/IDisplayObjectContainer";

import { ContainerBinding } from "./ContainerBinding";
import { ContainerRegistry } from "./ContainerRegistry";
import { ContainerRegistryEvent } from "./ContainerRegistryEvent";

/**
 * @private
 */
export class StageObserver {
    /*============================================================================*/
    /* Private Properties                                                         */
    /*============================================================================*/

    private _registry: ContainerRegistry;

    /*============================================================================*/
    /* Constructor                                                                */
    /*============================================================================*/

    /**
     * @private
     */
    constructor(containerRegistry: ContainerRegistry) {
        this._registry = containerRegistry;

        // We only care about roots
        this._registry.addEventListener(ContainerRegistryEvent.ROOT_CONTAINER_ADD, this.onRootContainerAdd);
        this._registry.addEventListener(ContainerRegistryEvent.ROOT_CONTAINER_REMOVE, this.onRootContainerRemove);

        // We might have arrived late on the scene
        this._registry.rootBindings.forEach((binding: ContainerBinding) => {
            this.addRootListener(binding.container);
        });
    }

    /*============================================================================*/
    /* Public Functions                                                           */
    /*============================================================================*/

    /**
     * @private
     */
    public destroy(): void {
        this._registry.removeEventListener(ContainerRegistryEvent.ROOT_CONTAINER_ADD, this.onRootContainerAdd);
        this._registry.removeEventListener(ContainerRegistryEvent.ROOT_CONTAINER_REMOVE, this.onRootContainerRemove);

        this._registry.rootBindings.forEach((binding: ContainerBinding) => {
            this.removeRootListener(binding.container);
        });
    }

    /*============================================================================*/
    /* Private Functions                                                          */
    /*============================================================================*/

    private onRootContainerAdd = (event: ContainerRegistryEvent): void => {
        this.addRootListener(event.container);
    };

    private onRootContainerRemove = (event: ContainerRegistryEvent): void => {
        this.removeRootListener(event.container);
    };

    private addRootListener(container: IDisplayObjectContainer): void {
        container.addEventListener("addedToStage", this.onViewAddedToStage);
    }

    private removeRootListener(container: IDisplayObjectContainer): void {
        container.removeEventListener("addedToStage", this.onViewAddedToStage);
    }

    private onViewAddedToStage = (event: IEvent): void => {
        let view: IDisplayObjectContainer = event.target;
        let type: IClass<any> = <IClass<any>>view.constructor;

        // Walk upwards from the nearest binding
        let binding: ContainerBinding = this._registry.findParentBinding(view);
        while (binding) {
            binding.handleView(view, type);
            binding = binding.parent;
        }
    };
}
