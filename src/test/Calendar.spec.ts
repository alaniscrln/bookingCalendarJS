import { Calendar } from '../app/controller/Calendar';

import { spanish as spanishMonthsNames, english as englishMonthsNames } from './fixtures/months-names.json';
import { august as augustStructure, october as octoberStructure } from './fixtures/months-structure.json';
import { spanish as spanishDaysNames, english as englishDaysNames } from './fixtures/days-names.json';

describe('Calendar class', () => {

    let calendar: Calendar;

    describe('in Spanish', () => {
        beforeEach(() => {
            calendar = new Calendar('es');
        });

        describe("getMonths function", () => {
            test("should return months", () => {
                expect(calendar.getMonthsName()).toEqual(spanishMonthsNames);
            });
        });

        describe("getMonth function", () => {
            test("should return month 5", () => {
                calendar.changeDate(new Date(2021, 5));
                let result: string = calendar.getMonthName();
                expect(result).toEqual(spanishMonthsNames[5]);
            });

            test("shouldn't return month 12, should return month 1 (Enero)", () => {
                calendar.changeDate(new Date(2021, 12));
                let result = calendar.getMonthName();
                expect(result).toEqual('Enero');
            });
        });

        describe("getDays function", () => {
            test("should return days", () => {
                let result: string[] = calendar.getDaysName();
                expect(result).toEqual(spanishDaysNames);
            });
        });

        describe("getDay function", () => {
            test("should return day 6", () => {
                let result: string = calendar.getDayName(6);
                expect(result).toEqual(spanishDaysNames[6]);
            });

            test("shouldn't return day 7, test should throw an error", () => {
                expect(function () {
                    calendar.getDayName(7)
                }).toThrow(new Error('Day cannot be greater than 6.'));
            });
        });

        describe("getMonthDays function", () => {
            test("should return the number of days of February", () => {
                calendar.changeDate(new Date(2021, 1));
                let expectedResult = 28;
                let result = calendar.getMonthDays();
                expect(result).toEqual(expectedResult);
            });
        });

        describe("getFirstDayOfMonth function", () => {
            test("should show the number of the first day of August 2021 (Sunday => 0)", () => {
                calendar.changeDate(new Date(2021, 7));
                let result = calendar.getFirstDayOfMonth();
                let expectedResult = 0;
                expect(result).toEqual(expectedResult);
            });
        });
    });

    /* ----------------------------- Start English ----------------------------- */
    describe('in English', () => {
        beforeEach(() => {
            calendar = new Calendar('en');
        });

        describe("getMonths function", () => {
            test("should return months in english", () => {
                expect(calendar.getMonthsName()).toEqual(englishMonthsNames);
            });
        });

        describe("getMonth function", () => {
            test("should return month 5 in english", () => {
                calendar.changeDate(new Date(2021, 5));
                let result: string = calendar.getMonthName();
                expect(result).toEqual(englishMonthsNames[5]);
            });
        });

        describe("getDays function", () => {
            test("should return days", () => {
                let result: string[] = calendar.getDaysName();
                expect(result).toEqual(englishDaysNames);
            });
        });
    });
    /* ----------------------------- End English ----------------------------- */

    describe("Generics test", () => {
        beforeEach(() => {
            calendar = new Calendar('es');
        });

        describe("setMonthStructure function", () => {
            test("should return an array with August structure", () => {
                calendar.changeDate(new Date(2021, 7));
                const result = calendar.setMonthStructure();
                expect(result).toEqual(augustStructure);
            });

            test("should return an array with October structure", () => {
                calendar.changeDate(new Date(2021, 9));
                const result = calendar.setMonthStructure();
                expect(result).toEqual(octoberStructure);
            });
        })

        describe("setPreviousMonth and setNextMonth functions", () => {
            test("shouldn't change the currentMonth (today) to the previous one", () => {
                const expectedResult = calendar.getCurrentDate();
                calendar.setPreviousMonth();
                const result = calendar.getCurrentDate();
                expect(result).toEqual(expectedResult);
            });


            test("should change the currentMonth(2021, 3) to the next one", () => {
                calendar.changeDate(new Date(2021, 3));
                calendar.setNextMonth();
                const expectedResult = new Date(2021, 4);
                const result = calendar.getCurrentDate();
                expect(result).toEqual(expectedResult);
            });

            test("should change the currentMonth (Today + 1) to the previous one (Today)", () => {
                const expectedResult = calendar.getCurrentDate();
                calendar.changeDate(
                    new Date(
                        calendar.getCurrentDate().getFullYear(),
                        calendar.getCurrentDate().getMonth() + 1
                    ));
                calendar.setPreviousMonth();
                const result = calendar.getCurrentDate();
                expect(result).toEqual(expectedResult);
            });

            test("should change the currentMonth (2020, 11) to the next one", () => {
                calendar.changeDate(new Date(2020, 11));
                calendar.setNextMonth();
                const expectedResult = new Date(2021, 0);
                const result = calendar.getCurrentDate();
                expect(result).toEqual(expectedResult);
            });
        });
    });
});
