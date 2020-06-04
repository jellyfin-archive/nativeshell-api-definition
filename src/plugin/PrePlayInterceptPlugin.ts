/**
 * Has the ability to act before playback starts for some items.
 */
import { IPlugin, PluginType } from "./Plugin";

export interface IPrePlayInterceptPlugin extends IPlugin {
    /**
     * Has to be the `"preplayintercept"`.
     */
    type: PluginType.PRE_PLAY_INTERCEPT;
}
