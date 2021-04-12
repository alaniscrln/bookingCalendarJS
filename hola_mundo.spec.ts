import { expect } from 'chai';
import 'mocha';

describe("Hello World string function", () => {

    // Describes lo que tienes que retornar
    it("should return Hello world!", () => {
        const result = "Hello world!";

        const expectedResult = "Hello world!";

        expect(result).to.equal(expectedResult);
    });
 
});