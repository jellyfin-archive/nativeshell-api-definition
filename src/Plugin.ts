/**
 * Definitions regarding the plugin architecture
 */

/**
 * The class of the plugin. Contains various static attributes
 */
export interface IPluginClass {
    /**
     * Initializes the plugin
     */
    new(): IPlugin;
}

/**
 * The plugin coordinates various aspects of jellyfin
 */
export interface IPlugin {

}

export type PluginBuilder = () => IPluginClass | Promise<IPluginClass>;
