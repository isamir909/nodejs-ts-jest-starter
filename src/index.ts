export type StringInfo={
    lowerCase: string;
    upperCase: string;
    length: number;
    characters: string[];
    extraInfo:Object | undefined;
}

export function getStringInfo(str: string): StringInfo {
    return {
        lowerCase: str.toLowerCase(),
        upperCase: str.toUpperCase(),
        length: str.length,
        characters: Array.from(str),
        extraInfo: {}
    }
}
