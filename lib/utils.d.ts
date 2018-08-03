import { DeviceManager } from "./device-manager";
export declare function getDeviceManager(constantns?: any): Promise<DeviceManager>;
export declare function executeCommand(args: any, cwd?: any): string;
export declare function waitForOutput(process: any, matcher: any, errorMatcher: any, timeout: any): Promise<boolean>;
export declare function resolve(mainPath: any, ...args: any[]): any;
export declare function fileExists(p: any): boolean;
export declare function resolveFiles(mainPath: any, ...args: any[]): any;
export declare function fileInfo(fileName: any): {
    mtime: Date;
};
export declare function removeFileOrFolder(fullName: string): void;
export declare function removeFilesRecursive(mainDir: string, files?: Array<string>): string[];
export declare function isDirectory(fullName: string): boolean;
export declare function isFile(fullName: string): boolean;
export declare function isSymLink(fullName: string): boolean;
export declare function getAllFileNames(folder: string): string[];
export declare function mkDir(dir: any): void;
export declare function mkFile(file: string, content: any): void;
export declare function writeFileToJson(file: any, content: any): void;
export declare function readJsonFromFile(file: any): any;
export declare const wait: (miliseconds: any) => boolean;
export declare function logInfo(info: any, obj?: any): void;
export declare function logWarn(info: any, obj?: any): void;
export declare function logError(info: any, obj?: any): void;
