import { MediaType } from "../common";

/**
 * Client profile that tells the server what the client supports
 */
export interface IProfile {
    /**
     * TODO: Document
     */
    MaxStreamingBitrate: number;

    /**
     * TODO: Document
     */
    MaxStaticBitrate: number;

    /**
     * Bitrate of transcoded music
     */
    MusicStreamingTranscodingBitrate: number;

    /**
     * Supported subtitles
     */
    SubtitleProfiles: ISubtitleProfile[];

    /**
     * Profiles that are directly playable (directly play from the original container)
     */
    DirectPlayProfiles: IDirectPlayProfile[];

    /**
     * TODO: Document
     */
    CodecProfiles: ICodecProfile[];

    /**
     * Preferred transcoding profiles
     */
    TranscodingProfiles: ITranscodingProfile[];
}

/**
 * Different methods to deliver the subtitles to the user
 */
export enum SubtitleMethod {
    /**
     * Sends subtitle inside the media container
     */
    EMBED = "Embed",

    /**
     * Burns the subtitle into the video (always causes transcoding)
     */
    ENCODE = "Encode",
}

/**
 * Definition of support for a subtitle format
 */
export interface ISubtitleProfile {
    /**
     * The format that is referred to
     */
    Format: string;

    /**
     * The level of support
     */
    Method: SubtitleMethod;
}

/**
 * Represents a direct play supported container
 */
export interface IDirectPlayProfile {
    /**
     * The container name
     */
    Container: string;

    /**
     * Container type
     */
    Type: MediaType;

    /**
     * The video codecs supported in the container (separated by `,`).
     */
    VideoCodec?: string;

    /**
     * The audio codecs supported in the container (separated by `,`).
     */
    AudioCodec: string;
}

/**
 * TODO: Document
 */
export interface ICodecProfile {
    /**
     * Container type
     */
    Type: MediaType;

    /**
     * Codec id
     */
    Codec: string;

    /**
     * TODO: Document
     */
    Conditions: IConditionSpec[];
}

/**
 * Represents the operator that can be used for [[`IConditionSpec`]]
 */
export enum ConditionOperator {
    /**
     * True if the property matches any of the values (similar to `p in [v1, v2, v3]`)
     */
    EQUALS_ANY = "EqualsAny",

    /**
     * True if the property is less or equal the value (similar to `p `**`<=`**` v`)
     */
    LESS_OR_EQUAL = "LessThanEqual",
}

/**
 * Represents a condition
 */
export interface IConditionSpec {
    /**
     * The operator to apply (e.g. `==`, `<=`, `in`, ...)
     */
    Condition: ConditionOperator;

    /**
     * The property to compare. Is serves as the left side of the calculation (e.g. `property == value`)
     */
    Property: string;

    /**
     * The value to compare the property to. Is serves as the right side of the calculation (e.g. `property == value`).
     *
     * If you need to pass a list (e.g. for [[`ConditionOperator.EQUALS_ANY`]]) separate the values using `|`.
     */
    Value: string | number;
}

/**
 * Specifies a profile to transcode to when the media is not compatible
 */
export interface ITranscodingProfile {
    /**
     * Container id to transcode to
     */
    Container: string;

    /**
     * Type of the container
     */
    Type: MediaType;

    /**
     * Video codecs to transcode to. Use `,` to separate multiple
     */
    VideoCodec?: string;

    /**
     * Audio codecs to transcode to. Use `,` to separate multiple
     */
    AudioCodec: string;
    Context: ProfileContext;
    Protocol?: ProfileProtocol;
    MinSegments?: number;
}

/**
 * TODO: Document
 */
export enum ProfileContext {
    /**
     * TODO: Document
     */
    STREAMING = "Streaming",
}

/**
 * TODO: Document
 */
export enum ProfileProtocol {
    /**
     * TODO: Document
     */
    HLS = "hls",
    /**
     * TODO: Document
     */
    HTTP = "http",
}
