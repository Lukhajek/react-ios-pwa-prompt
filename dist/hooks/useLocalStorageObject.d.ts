export declare const useLocalStorageObject: () => {
    get: (key: string) => any;
    set: (key: string, obj: {
        [key: string]: unknown;
    }) => void;
    remove: (key: string) => void;
};
