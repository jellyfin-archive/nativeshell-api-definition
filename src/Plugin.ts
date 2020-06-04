/**
 * @fileOverview
 * Definitions regarding the plugin architecture.
 */

import { IProfile } from "./Profile";
import { MediaType } from "./common";

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
    play(options: unknown): Promise<unknown>;

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

    /**
     * Gets the current time of the playback
     * TODO: Document unit
     */
    currentTime(): number | null;

    /**
     * Sets (and gets) the current time of the playback
     * TODO: Document unit
     */
    currentTime(value: number): void;

    /**
     * Gets the duration of the item
     * TODO: Document unit
     */
    duration(): number | null;

    /**
     * Sets (and gets) the duration of the item
     * TODO: Document unit
     */
    duration(value: number): void;

    /**
     * Called when the player is not needed anymore
     */
    destroy(): void;

    /**
     * Pauses the player
     */
    pause(): void;

    /**
     * Unpauses the player
     */
    unpause(): void;

    /**
     * Whether the player is paused
     */
    paused(): boolean;

    /**
     * Stops the playback
     *
     * @param destroy Whether the player should be destroyed
     */
    stop(destroy: boolean): Promise<unknown>;

    /**
     * Sets whether the player is muted or not
     */
    setMute(value: boolean): void;

    /**
     * Whether the player is muted
     */
    isMuted(): boolean;

    /**
     * Checks if the item can be played via the native player implementation
     */
    getDeviceProfile(item: unknown, options: unknown): IProfile;
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
 * Function for loading a plugin.
 */
export type PluginBuilder = () => IPluginClass | Promise<IPluginClass>;
