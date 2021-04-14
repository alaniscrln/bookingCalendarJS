import { expect } from 'chai';
import 'mocha';
import { BookingCalendar } from '../app/BookingCalendar';


describe("getMonths function from BookingCalendar class", () => {
    it("should return months in spanish", () => {
        const calendar = new BookingCalendar('es', 'key');
        const months = [
            'Enero', 'Febrero', 'Marzo',
            'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre',
            'Octubre', 'Noviembre', 'Diciembre'
        ];
        expect(calendar.getMonths()).to.eql(months);
    });

    it("should return months in english", () => {
        const calendar = new BookingCalendar('en', 'key');
        const months = [
            'January', 'February', 'March',
            'April', 'May', 'June',
            'July', 'August', 'September',
            'October', 'November', 'December'
        ];
        expect(calendar.getMonths()).to.eql(months);
    });
});

describe("getMonth function from BookingCalendar class", () => {
    it("should return month 5 in spanish", () => {
        const calendar = new BookingCalendar('es', 'key');

        let result: string = calendar.getMonth(5);
        let expectedResult: string = 'Junio';

        expect(result).to.equal(expectedResult);
    });

    it("should return month 5 in spanish but the expected result is in english", () => {
        const calendar = new BookingCalendar('es', 'key');

        let result: string = calendar.getMonth(5);
        let expectedResult: string = 'June';

        expect(result).to.not.equal(expectedResult);
    });

    it("should return month 5 in english", () => {
        const calendar = new BookingCalendar('en', 'key');

        let result: string = calendar.getMonth(5);
        let expectedResult: string = 'June';

        expect(result).to.equal(expectedResult);
    });

    it("should return month 5 in english but the expected result is in spanish", () => {
        const calendar = new BookingCalendar('en', 'key');

        let result: string = calendar.getMonth(5);
        let expectedResult: string = 'Junio';

        expect(result).to.not.equal(expectedResult);
    });

    it("shouldn't return month 5 in spanish", () => {
        const calendar = new BookingCalendar('es', 'key');

        let result: string = calendar.getMonth(5);
        let expectedResult: string = 'Mayo';

        expect(result).to.not.equal(expectedResult);
    });

    it("shouldn't return month 5 in english", () => {
        const calendar = new BookingCalendar('en', 'key');

        let result: string = calendar.getMonth(5);
        let expectedResult: string = 'May';

        expect(result).to.not.equal(expectedResult);
    });

    it("shouldn't return month 12 in spanish, should throw an error", () => {
        const calendar = new BookingCalendar('es', 'key');
        expect(function () {
            calendar.getMonth(12)
        }).to.throw(Error, 'Month cannot be greater than 11.');
    });
});


describe("getDays function from BookingCalendar class", () => {
    it("should return days in spanish", () => {
        const calendar = new BookingCalendar('es', 'key');

        let result: string[] = calendar.getDays();
        let expectedResult: string[] = ['D', 'L', 'M',
            'X', 'J', 'V', 'S'];

        expect(result).to.eql(expectedResult);
    });

    it("should return days in english", () => {
        const calendar = new BookingCalendar('en', 'key');

        let result: string[] = calendar.getDays();
        let expectedResult: string[] = ['S', 'M', 'T',
            'W', 'T', 'F', 'S'];

        expect(result).to.eql(expectedResult);
    });
});

describe("getDay function from BookingCalendar class", () => {
    it("should return day 6 in spanish", () => {
        const calendar = new BookingCalendar('es', 'key');

        let result: string = calendar.getDay(6);
        let expectedResult: string = 'S';

        expect(result).to.equal(expectedResult);
    });

    it("shouldn't return day 7 in spanish, it should throw an error", () => {
        const calendar = new BookingCalendar('es', 'key');
        expect(function () {
            calendar.getDay(7)
        }).to.throw(Error, 'Day cannot be greater than 6.');
    });
});


describe("getMonthDay function from BookingCalendar class", () => {
    it("should return the number of days of February", () => {
        const calendar = new BookingCalendar('es', 'key');
        let expectedResult = 28;
        let result = calendar.getMonthDays(2, 2021);
        expect(result).to.equal(expectedResult);
    });

    it("shouldn't return the number of days of the 14th month, it should throw an error", () => {
        const calendar = new BookingCalendar('es', 'key');
        expect(function () {
            calendar.getMonthDays(14, 21);
        }).to.throw(Error, 'Month cannot be greater than 12 and less than 1.');
    });

    it("shouldn't return the number of days of -2 month, it should throw an error", () => {
        const calendar = new BookingCalendar('es', 'key');
        expect(function () {
            calendar.getMonthDays(-10, 21);
        }).to.throw(Error, 'Month cannot be greater than 12 and less than 1.');
    });

    it("should return the number of days of February, even if the year is negative", () => {
        const calendar = new BookingCalendar('es', 'key');
        let expectedResult = 28;
        let result = calendar.getMonthDays(2, -2021);
        expect(result).to.equal(expectedResult);
    });
});


describe("getFirstDayOfMonth function from BookingCalendar class", () => {
    it("should show the number of the first day of August 2021 (Sunday => 0)", () => {
        const calendar = new BookingCalendar('es', 'key');
        let result = calendar.getFirstDayOfMonth(7, 2021);
        let expectedResult = 0;
        expect(result).to.equal(expectedResult);
    });

    it("shouldn't return the number of the first day of the 14th month, it should throw an error", () => {
        const calendar = new BookingCalendar('es', 'key');
        expect(function () {
            calendar.getFirstDayOfMonth(14, 2021);
        }).to.throw(Error, 'Month cannot be greater than 11 and less than 0.');
    });


});

describe("setMonthStructure function from BookingCalendar class", () => {
    it("", () => {
        const calendar = new BookingCalendar('es', 'key');
        const date = new Date(2021, 1);
        const result = calendar.setMonthStructure(date);
        const expectedResult = [
            null,          { day: '1' },  { day: '2' },
            { day: '3' },  { day: '4' },  { day: '5' },
            { day: '6' },  { day: '7' },  { day: '8' },
            { day: '9' },  { day: '10' }, { day: '11' },
            { day: '12' }, { day: '13' }, { day: '14' },
            { day: '15' }, { day: '16' }, { day: '17' },
            { day: '18' }, { day: '19' }, { day: '20' },
            { day: '21' }, { day: '22' }, { day: '23' },
            { day: '24' }, { day: '25' }, { day: '26' },
            { day: '27' }, { day: '28' }
          ];

        expect(result).to.eql(expectedResult);
    });
})
