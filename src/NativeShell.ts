/**
 * The entry point for the WebClient that links the native app into the web client
 */
import { IAppHost } from "./AppHost";

export interface INativeShell {
    /**
     * Return an array of require.js module names of plugins.
     */
    getPlugins(): string[];

    /**
     * Provide a method of opening external urls. Alternative to target="_blank" in browsers.
     */
    openUrl(url: string, target?: string): void;

    /**
     * Enable fullscreen mode for video playback.
     */
    enableFullscreen(): void;

    /**
     * Disable fullscreen mode when video playback stops.
     */
    disableFullscreen(): void;

    /**
     * Download a file to the local filesystem.
     *
     * @param downloadInfo Information to start a user facing download
     */
    downloadFile(downloadInfo: IDownloadInfo): void;

    /**
     * Automatically discovers servers
     *
     * @param timeout Timeout in ms
     */
    findServers?(timeout: number): Promise<IDiscoveredServer[]>;

    /**
     * Update the state of the media player.
     *
     * @param mediaInfo Information about the currently running media
     */
    updateMediaSession(mediaInfo: IMediaInfo): void;

    /**
     * Hide media information/controls when media playback is complete.
     */
    hideMediaSession(): void;

    /**
     * App host instance
     */
    AppHost: IAppHost;
}

/**
 * Information to start a download to the local file system
 *
 * See also: {@link INativeShell.downloadFile}
 */
export interface IDownloadInfo {
    /**
     * The url to download the file from
     */
    url: string;
    /**
     * The title of the file to display to the user (e.g. a Movie title; might no be supported/used on any platform)
     */
    title: string;
    /**
     * The (preferred) filename to save the file as (might no be supported/used on any platform)
     */
    filename: string;
}

/**
 * A description of a Server that was discovered automatically
 *
 * See also: {@link INativeShell.findServers}
 */
export interface IDiscoveredServer {
    /**
     * Id of the server
     */
    Id: string;
    /**
     * Example: `"http://127.0.0.1:8096"`
     */
    Address: "http://127.0.0.1:8096";
    /**
     * Example: `"http://example.com:8096"`
     */
    EndpointAddress: string; // This seems to only be used for servers that are not local? Maybe a remnant from Emby Connect?
    /**
     * Display name of the server
     */
    Name: string;
}

/**
 * Info about the currently playing media
 *
 * See also: {@link INativeShell.updateMediaSession}
 */
export interface IMediaInfo {
    action: string;
    isLocalPlayer: boolean;
    itemId: string;
    title: string;
    artist: string;
    album: string;
    /**
     * Float
     */
    duration: number;
    /**
     * Float
     */
    position: number;
    imageUrl: string;
    canSeek: boolean;
    isPaused: boolean;
}
