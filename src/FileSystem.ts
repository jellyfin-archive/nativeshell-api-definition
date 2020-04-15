export interface IFileSystem {
    /**
     * Checks if a file exists
     *
     * @param path The path to check
     */
    fileExists(path: string): Promise<boolean>;

    /**
     * Checks if a directory exists
     *
     * @param path The path to check
     */
    directoryExists(path: string): Promise<boolean>;
}
