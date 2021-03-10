import { IPlugin, PluginType } from "./Plugin";

/**
 * TODO: Documentation
 */
export interface ISkinPlugin extends IPlugin {
    /**
     * Has to be the `"skin"`.
     */
    type: PluginType.SKIN;
}
