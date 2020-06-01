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

    /**
     * TODO: Document
     */
    supportsProgress: boolean;

    /**
     * TODO: Document
     */
    isLocalPlayer: boolean;

    /**
     * TODO: Document
     */
    volume: number;

    /**
     * Checks which media types the plugin can play.
     */
    canPlayMediaType(mediaType: MediaType): boolean;

    /**
     * Checks which tracks are supported.
     */
    checkTracksSupport(
        videoTracks: unknown,
        audioTracks: unknown,
        subtitleTracks: unknown
    ):
        | {
              videoTracks: unknown;
              audioTracks: unknown;
              subtitleTracks: unknown;
          }
        | boolean;

    /**
     * Checks if an item can be played.
     */
    canPlayItem(item: unknown, playOptions: unknown): boolean;

    /**
     * Returns currently playing url.
     */
    currentSrc(): string;

    /**
     * Starts playback of an item.
     */
    play(options: unknown): Promise<any>;

    /**
     * Sets the subtitle stream to play.
     */
    setSubtitleStreamIndex(index: number): void;

    /**
     * Checks if the audio stream can be switched.
     */
    canSetAudioStreamIndex(): boolean;

    /**
     * Sets the subtitle stream to play.
     */
    setAudioStreamIndex(index: number): void;
}

/**
 * Types available for the plugins.
 */
export enum PluginType {
    /**
     * Alternative media player plugin.
     */
    MEDIA_PLAYER = "mediaplayer",
}

/**
 * Media types available.
 */
export enum MediaType {
    /**
     * Videos
     */
    VIDEO = "Video",

    /**
     * Audio tracks
     */
    AUDIO = "Audio",
}

/**
 * Function for loading a plugin.
 */
export type PluginBuilder = () => IPluginClass | Promise<IPluginClass>;
