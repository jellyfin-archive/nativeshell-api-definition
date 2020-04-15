/**
 * The entry point for the WebClient that links the native app into the web client
 */
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
     * @param url The URL where the file should be downloaded from
     */
    downloadFile(url: string): void;

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
