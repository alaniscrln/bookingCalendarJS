import { BookingCalendar } from '../app/BookingCalendar';

import { spanish as spanishMonthsNames } from './fixtures/months-names.json';

describe('Booking Calendar', () => {

    let calendar: BookingCalendar;

    describe('in Spanish', () => {
        beforeEach(() => {
            calendar = new BookingCalendar('es', 'key');
        });

        test('should return the months in spanish', () => {
            expect(calendar.getMonthsName()).toEqual(spanishMonthsNames);
        });
    });

    describe('in English', () => {
        beforeEach(() => {
            calendar = new BookingCalendar('en', 'key');
        });
    });


    describe("getMonths function from BookingCalendar class", () => {
        let calendar: BookingCalendar;
        beforeEach(() => {
            calendar = new BookingCalendar('es', 'key');
        });
        test("should return months in spanish", () => {
            const months = [
                'Enero', 'Febrero', 'Marzo',
                'Abril', 'Mayo', 'Junio',
                'Julio', 'Agosto', 'Septiembre',
                'Octubre', 'Noviembre', 'Diciembre'
            ];
            expect(calendar.getMonthsName()).toEqual(months);
        });

        test("should return months in english", () => {
            const calendar = new BookingCalendar('en', 'key');
            const months = [
                'January', 'February', 'March',
                'April', 'May', 'June',
                'July', 'August', 'September',
                'October', 'November', 'December'
            ];
            expect(calendar.getMonthsName()).toEqual(months);
        });
    });

    describe("getMonth function from BookingCalendar class", () => {
        test("should return month 5 in spanish", () => {
            const calendar = new BookingCalendar('es', 'key');

            let result: string = calendar.getMonthName(5);
            let expectedResult: string = 'Junio';

            expect(result).toEqual(expectedResult);
        });


        test("should return month 5 in english", () => {
            const calendar = new BookingCalendar('en', 'key');

            let result: string = calendar.getMonthName(5);
            let expectedResult: string = 'June';

            expect(result).toEqual(expectedResult);
        });

        test("shouldn't return month 12 in spanish, should throw an error", () => {
            const calendar = new BookingCalendar('es', 'key');
            expect(function () {
                calendar.getMonthName(12)
            }).toThrow(new Error('Month cannot be greater than 11.'));
        });
    });


    describe("getDays function from BookingCalendar class", () => {
        test("should return days in spanish", () => {
            const calendar = new BookingCalendar('es', 'key');

            let result: string[] = calendar.getDaysName();
            let expectedResult: string[] = ['D', 'L', 'M',
                'X', 'J', 'V', 'S'];

            expect(result).toEqual(expectedResult);
        });

        test("should return days in english", () => {
            const calendar = new BookingCalendar('en', 'key');

            let result: string[] = calendar.getDaysName();
            let expectedResult: string[] = ['S', 'M', 'T',
                'W', 'T', 'F', 'S'];

            expect(result).toEqual(expectedResult);
        });
    });

    describe("getDay function from BookingCalendar class", () => {
        test("should return day 6 in spanish", () => {
            const calendar = new BookingCalendar('es', 'key');

            let result: string = calendar.getDayName(6);
            let expectedResult: string = 'S';

            expect(result).toEqual(expectedResult);
        });

        test("shouldn't return day 7 in spanish, test should throw an error", () => {
            const calendar = new BookingCalendar('es', 'key');
            expect(function () {
                calendar.getDayName(7)
            }).toThrow(new Error('Day cannot be greater than 6.'));
        });
    });


    describe("getMonthDays function from BookingCalendar class", () => {
        test("should return the number of days of February", () => {
            const calendar = new BookingCalendar('es', 'key');
            calendar.changeMonth(new Date(2021, 1));
            let expectedResult = 28;
            let result = calendar.getMonthDays();
            expect(result).toEqual(expectedResult);
        });
    });


    describe("getFirstDayOfMonth function from BookingCalendar class", () => {
        test("should show the number of the first day of August 2021 (Sunday => 0)", () => {
            const calendar = new BookingCalendar('es', 'key');
            calendar.changeMonth(new Date(2021, 7));
            let result = calendar.getFirstDayOfMonth();
            let expectedResult = 0;
            expect(result).toEqual(expectedResult);
        });

    });

    describe("setMonthStructure function from BookingCalendar class", () => {
        test("should return an array wtesth August structure", () => {
            const calendar = new BookingCalendar('es', 'key');
            calendar.changeMonth(new Date(2021, 7));
            const result = calendar.setMonthStructure();
            const expectedResult = [
                { day: '1' }, { day: '2' }, { day: '3' },
                { day: '4' }, { day: '5' }, { day: '6' },
                { day: '7' }, { day: '8' }, { day: '9' },
                { day: '10' }, { day: '11' }, { day: '12' },
                { day: '13' }, { day: '14' }, { day: '15' },
                { day: '16' }, { day: '17' }, { day: '18' },
                { day: '19' }, { day: '20' }, { day: '21' },
                { day: '22' }, { day: '23' }, { day: '24' },
                { day: '25' }, { day: '26' }, { day: '27' },
                { day: '28' }, { day: '29' }, { day: '30' },
                { day: '31' }
            ];

            expect(result).toEqual(expectedResult);
        });

        test("should return an array wtesth October structure", () => {
            const calendar = new BookingCalendar('es', 'key');
            calendar.changeMonth(new Date(2021, 9));
            const result = calendar.setMonthStructure();
            const expectedResult = [
                null, null, null,
                null, null, { day: '1' },
                { day: '2' }, { day: '3' }, { day: '4' },
                { day: '5' }, { day: '6' }, { day: '7' },
                { day: '8' }, { day: '9' }, { day: '10' },
                { day: '11' }, { day: '12' }, { day: '13' },
                { day: '14' }, { day: '15' }, { day: '16' },
                { day: '17' }, { day: '18' }, { day: '19' },
                { day: '20' }, { day: '21' }, { day: '22' },
                { day: '23' }, { day: '24' }, { day: '25' },
                { day: '26' }, { day: '27' }, { day: '28' },
                { day: '29' }, { day: '30' }, { day: '31' }
            ];

            expect(result).toEqual(expectedResult);
        });
    })

    describe("setPreviousMonth function from BookingCalendar class", () => {
        test("should change the currentMonth (2021, 3) to the previous one", () => {
            const calendar = new BookingCalendar('es', 'key');
            calendar.changeMonth(new Date(2021, 3));
            calendar.setPreviousMonth();
            const expectedResult = new Date(2021,2);
            const result = calendar.currentDate;
            expect(result).toEqual(expectedResult);
        });


        test("should change the currentMonth(2021, 3) to the next one", () => {
            const calendar = new BookingCalendar('es', 'key');
            calendar.changeMonth(new Date(2021, 3));
            calendar.setNextMonth();
            const expectedResult = new Date(2021,4);
            const result = calendar.currentDate;
            expect(result).toEqual(expectedResult);
        });

        test("should change the currentMonth (2021, 0) to the previous one", () => {
            const calendar = new BookingCalendar('es', 'key');
            calendar.changeMonth(new Date(2021, 0));
            calendar.setPreviousMonth();
            const expectedResult = new Date(2020,11);
            const result = calendar.currentDate;
            expect(result).toEqual(expectedResult);
        });

        test("should change the currentMonth (2020, 11) to the next one", () => {
            const calendar = new BookingCalendar('es', 'key');
            calendar.changeMonth(new Date(2020, 11));
            calendar.setNextMonth();
            const expectedResult = new Date(2021,0);
            const result = calendar.currentDate;
            expect(result).toEqual(expectedResult);
        });
    });
});
