export interface IAppHost {
    /**
     * Generates a profile of media the app can stream
     *
     * @param profileBuilder A helper that makes the profile creation easier
     */
    getDeviceProfile(profileBuilder: unknown): Promise<unknown>;

    /**
     * Generates a profile of media the app can sync
     *
     * @param profileBuilder A helper that makes the profile creation easier
     * @param appSettings TODO: Add description
     */
    getSyncProfile(
        profileBuilder: unknown,
        appSettings: unknown
    ): Promise<unknown>;

    /**
     * Called when the app exits
     */
    exit(): void;

    /**
     * Return a boolean value indicating if a command is supported in the app.
     *
     * _For supported commands check: {@link Command}_
     *
     * @param command command that should be checked
     */
    supports(command: Command): boolean;

    /**
     * Return the default UI layout
     */
    getDefaultLayout(): Layout;

    /**
     * Returns basic info about the app
     *
     * _Called once startup_
     */
    init(): IAppInfo;

    /**
     * A unique and persistent device identifier
     */
    deviceID(): string;

    /**
     * A display name from the device
     *
     * _Example: My Phone_
     */
    deviceName(): string;

    /**
     * The display name for the app
     *
     * _Example: Jellyfin for Platform X_
     */
    appName(): string;

    /**
     * The version of the App
     *
     * _Example: 1.0.0_
     */
    appVersion(): string;
}

/**
 * Command available
 *
 * See also: {@link IAppHost.supports}
 */
export enum Command {
    /**
     * TODO: Add info
     */
    CAST_MENU_HASH_CHANGE = "castmenuhashchange",
    /**
     * TODO: Add info
     */
    CHROMECAST = "chromecast",
    /**
     * TODO: Add info
     */
    DISPLAY_LANGUAGE = "displaylanguage",
    /**
     * TODO: Add info
     */
    DISPLAY_MODE = "displaymode",
    /**
     * TODO: Add info
     */
    EXIT = "exit",
    /**
     * TODO: Add info
     */
    EXTERNAL_LINKS = "externallinks",
    /**
     * TODO: Add info
     */
    EXTERNAL_PLAYER_INTENT = "externalplayerintent",
    /**
     * TODO: Add info
     */
    FILE_DOWNLOAD = "filedownload",
    /**
     * TODO: Add info
     */
    FILE_INPUT = "fileinput",
    /**
     * TODO: Add info
     */
    FULLSCREEN_CHANGE = "fullscreenchange",
    /**
     * TODO: Add info
     */
    HTML_VIDEO_AUTOPLAY = "htmlvideoautoplay",
    /**
     * TODO: Add info
     */
    IMAGE_ANALYSIS = "imageanalysis",
    /**
     * TODO: Add info
     */
    MULTI_SERVER = "multiserver",
    /**
     * TODO: Add info
     */
    PHYSICAL_VOLUME_CONTROL = "physicalvolumecontrol",
    /**
     * TODO: Add info
     */
    REMOTE_AUDIO = "remoteaudio",
    /**
     * TODO: Add info
     */
    REMOTE_CONTROL = "remotecontrol",
    /**
     * TODO: Add info
     */
    REMOTE_VIDEO = "remotevideo",
    /**
     * TODO: Add info
     */
    RUN_AT_STARTUP = "runatstartup",
    /**
     * TODO: Add info
     */
    SCREENSAVER = "screensaver",
    /**
     * TODO: Add info
     */
    SHARING = "sharing",
    /**
     * TODO: Add info
     */
    SKINS = "skins",
    /**
     * TODO: Add info
     */
    SOUNDEFFECTS = "soundeffects",
    /**
     * TODO: Add info
     */
    SUBTITLE_APPEARANCE_SETTINGS = "subtitleappearancesettings",
    /**
     * TODO: Add info
     */
    SUBTITLE_BURN_SETTINGS = "subtitleburnsettings",
    /**
     * TODO: Add info
     */
    SYNC = "sync",
    /**
     * TODO: Add info
     */
    TARGET_BLANK = "targetblank",
}

/**
 * Available layouts
 *
 * See also: {@link IAppHost.getDefaultLayout}
 */
export enum Layout {
    MOBILE = "mobile",
    DESKTOP = "desktop",
    TV = "tv",
}

/**
 * Basic info about the app
 *
 * See also: {@link IAppHost.init}
 */
export interface IAppInfo {
    /**
     * A unique and persistent device identifier
     */
    deviceId: string;
    /**
     * A display name from the device
     *
     * _Example: My Phone_
     */
    deviceName: string;
    /**
     * The display name for the app
     *
     * _Example: Jellyfin for Platform X_
     */
    appName: string;
    /**
     * The version of the App
     *
     * _Example: 1.0.0_
     */
    appVersion: string;
}
