import { Timezone } from '../app/services/Timezone';

describe('TimeZone service', () => {

    let _timezone: Timezone;

    describe('calculeTimezone', () => {
        beforeEach(() => {
            _timezone = new Timezone();
        });

        describe("calculeTimezone function", () => {
            test("", () => {
                const timezone = "America/New_York";
                const hour = "18:00";

                const result = _timezone.calculeTimezone(timezone, hour);
                const expectedResult = "13:00";
                expect(result).toEqual(expectedResult);
            });
        });

    });
});