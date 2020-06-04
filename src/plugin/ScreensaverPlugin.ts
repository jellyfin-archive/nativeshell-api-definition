/**
 * Handles the sources for the various screensaver (photos, logo and so on).
 */
import { IPlugin, PluginType } from "./Plugin";

export interface IScreensaverPlugin extends IPlugin {
    /**
     * Has to be the `"screensaver"`.
     */
    type: PluginType.SCREENSAVER;
}
