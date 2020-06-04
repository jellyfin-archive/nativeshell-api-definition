/**
 * @fileOverview
 * Definitions regarding the plugin architecture.
 */

/**
 * The class of the plugin.
 */
export interface IPluginClass {
    /**
     * Initializes the plugin.
     */
    new (): IPlugin;
}

/**
 * The plugin coordinates various aspects of jellyfin.
 */
export interface IPlugin {
    /**
     * Display name of the plugin.
     */
    name: string;

    /**
     * Type of the plugin.
     */
    type: PluginType;

    /**
     * Unique id of the plugin.
     */
    id: string;

    /**
     * Priority of the plugin. A lower number is a higher priority.
     */
    priority: number;
}

/**
 * Types available for the plugins.
 */
export enum PluginType {
    /**
     * Specifies that the plugin is a [[`IMediaPlayerPlugin`]].
     */
    MEDIA_PLAYER = "mediaplayer",

    /**
     * Specifies that the plugin is a [[`IPrePlayInterceptPlugin`]].
     */
    PRE_PLAY_INTERCEPT = "preplayintercept",

    /**
     * Specifies that the plugin is a [[`IScreensaverPlugin`]].
     */
    SCREENSAVER = "screensaver",

    /**
     * Specifies that the plugin is a [[`ISkinPlugin`]].
     */
    SKIN = "skin",
}

/**
 * Function for loading a plugin.
 */
export type PluginBuilder = () => IPluginClass | Promise<IPluginClass>;
