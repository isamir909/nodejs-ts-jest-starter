import { getStringInfo } from "../index";

describe("getStringInfo for argument hello should", () => {
    // Test to check if the length of the string is correct
    test("return right length", () => {
        const sut = getStringInfo;
        const actual = sut("hello");
        expect(actual.length).toBe(5);
    });

    // Test to check if the lower case conversion is correct
    test("return right lowerCase", () => {
        const sut = getStringInfo;
        const actual = sut("hello");
        expect(actual.lowerCase).toBe("hello");
    });

    // Test to check if the upper case conversion is correct
    test("return right upperCase", () => {
        const sut = getStringInfo;
        const actual = sut("hello");
        expect(actual.upperCase).toBe("HELLO");
    });

    // Test to check if the characters array is correct
    test("return right characters", () => {
        const sut = getStringInfo;
        const actual = sut("hello");
        expect(actual.characters).toEqual(["h", "e", "l", "l", "o"]);
        
        // Checking if array contains the specified elements (order-independent)
        expect(actual.characters).toEqual(expect.arrayContaining(["o", "e", "l", "l", "h"]));
        
        // Checking if array contains a specific element
        expect(actual.characters).toContain<String>("h");
    });

    // Test to check if the extraInfo object is defined and not undefined
    test("return defined extra info", () => {
        const sut = getStringInfo;
        const actual = sut("hello");
        
        // Check if extraInfo is an empty object
        expect(actual.extraInfo).toEqual({});
        
        // Check if extraInfo is not undefined
        expect(actual.extraInfo).not.toBe(undefined);
        
        // Check if extraInfo is defined (not undefined or null)
        expect(actual.extraInfo).not.toBeUndefined();
        
        // Check if extraInfo is defined (another way)
        expect(actual.extraInfo).toBeDefined();
        
        // Check if extraInfo is truthy (not null, undefined, 0, etc.)
        expect(actual.extraInfo).toBeTruthy();
        
        // Check if extraInfo is not falsy (not false, 0, null, undefined, etc.)
        expect(actual.extraInfo).not.toBeFalsy();
    });
});
