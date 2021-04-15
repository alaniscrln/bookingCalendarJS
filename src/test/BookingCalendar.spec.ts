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
        expect(calendar.getMonthsName()).to.eql(months);
    });

    it("should return months in english", () => {
        const calendar = new BookingCalendar('en', 'key');
        const months = [
            'January', 'February', 'March',
            'April', 'May', 'June',
            'July', 'August', 'September',
            'October', 'November', 'December'
        ];
        expect(calendar.getMonthsName()).to.eql(months);
    });
});

describe("getMonth function from BookingCalendar class", () => {
    it("should return month 5 in spanish", () => {
        const calendar = new BookingCalendar('es', 'key');

        let result: string = calendar.getMonthName(5);
        let expectedResult: string = 'Junio';

        expect(result).to.equal(expectedResult);
    });

    it("should return month 5 in spanish but the expected result is in english", () => {
        const calendar = new BookingCalendar('es', 'key');

        let result: string = calendar.getMonthName(5);
        let expectedResult: string = 'June';

        expect(result).to.not.equal(expectedResult);
    });

    it("should return month 5 in english", () => {
        const calendar = new BookingCalendar('en', 'key');

        let result: string = calendar.getMonthName(5);
        let expectedResult: string = 'June';

        expect(result).to.equal(expectedResult);
    });

    it("should return month 5 in english but the expected result is in spanish", () => {
        const calendar = new BookingCalendar('en', 'key');

        let result: string = calendar.getMonthName(5);
        let expectedResult: string = 'Junio';

        expect(result).to.not.equal(expectedResult);
    });

    it("shouldn't return month 5 in spanish", () => {
        const calendar = new BookingCalendar('es', 'key');

        let result: string = calendar.getMonthName(5);
        let expectedResult: string = 'Mayo';

        expect(result).to.not.equal(expectedResult);
    });

    it("shouldn't return month 5 in english", () => {
        const calendar = new BookingCalendar('en', 'key');

        let result: string = calendar.getMonthName(5);
        let expectedResult: string = 'May';

        expect(result).to.not.equal(expectedResult);
    });

    it("shouldn't return month 12 in spanish, should throw an error", () => {
        const calendar = new BookingCalendar('es', 'key');
        expect(function () {
            calendar.getMonthName(12)
        }).to.throw(Error, 'Month cannot be greater than 11.');
    });
});


describe("getDays function from BookingCalendar class", () => {
    it("should return days in spanish", () => {
        const calendar = new BookingCalendar('es', 'key');

        let result: string[] = calendar.getDaysName();
        let expectedResult: string[] = ['D', 'L', 'M',
            'X', 'J', 'V', 'S'];

        expect(result).to.eql(expectedResult);
    });

    it("should return days in english", () => {
        const calendar = new BookingCalendar('en', 'key');

        let result: string[] = calendar.getDaysName();
        let expectedResult: string[] = ['S', 'M', 'T',
            'W', 'T', 'F', 'S'];

        expect(result).to.eql(expectedResult);
    });
});

describe("getDay function from BookingCalendar class", () => {
    it("should return day 6 in spanish", () => {
        const calendar = new BookingCalendar('es', 'key');

        let result: string = calendar.getDayName(6);
        let expectedResult: string = 'S';

        expect(result).to.equal(expectedResult);
    });

    it("shouldn't return day 7 in spanish, it should throw an error", () => {
        const calendar = new BookingCalendar('es', 'key');
        expect(function () {
            calendar.getDayName(7)
        }).to.throw(Error, 'Day cannot be greater than 6.');
    });
});


describe("getMonthDays function from BookingCalendar class", () => {
    it("should return the number of days of February", () => {
        const calendar = new BookingCalendar('es', 'key');
        calendar.changeMonth(new Date(2021, 1));
        let expectedResult = 28;
        let result = calendar.getMonthDays();
        expect(result).to.equal(expectedResult);
    });

});


describe("getFirstDayOfMonth function from BookingCalendar class", () => {
    it("should show the number of the first day of August 2021 (Sunday => 0)", () => {
        const calendar = new BookingCalendar('es', 'key');
        calendar.changeMonth(new Date(2021, 7));
        let result = calendar.getFirstDayOfMonth();
        let expectedResult = 0;
        expect(result).to.equal(expectedResult);
    });

});

describe("setMonthStructure function from BookingCalendar class", () => {
    it("should return an array with August structure", () => {
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

        expect(result).to.eql(expectedResult);
    });

    it("should return an array with October structure", () => {
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

        expect(result).to.eql(expectedResult);
    });
})

describe("setPreviousMonth function from BookingCalendar class", () => {
    it("should change the currentMonth (2021, 3) to the previous one", () => {
        const calendar = new BookingCalendar('es', 'key');
        calendar.changeMonth(new Date(2021, 3));
        calendar.setPreviousMonth();
        const expectedResult = new Date(2021,2);
        const result = calendar.currentDate;
        expect(result).to.eql(expectedResult);
    });


    it("should change the currentMonth(2021, 3) to the next one", () => {
        const calendar = new BookingCalendar('es', 'key');
        calendar.changeMonth(new Date(2021, 3));
        calendar.setNextMonth();
        const expectedResult = new Date(2021,4);
        const result = calendar.currentDate;
        expect(result).to.eql(expectedResult);
    });

    it("should change the currentMonth (2021, 0) to the previous one", () => {
        const calendar = new BookingCalendar('es', 'key');
        calendar.changeMonth(new Date(2021, 0));
        calendar.setPreviousMonth();
        const expectedResult = new Date(2020,11);
        const result = calendar.currentDate;
        expect(result).to.eql(expectedResult);
    });

    it("should change the currentMonth (2020, 11) to the next one", () => {
        const calendar = new BookingCalendar('es', 'key');
        calendar.changeMonth(new Date(2020, 11));
        calendar.setNextMonth();
        const expectedResult = new Date(2021,0);
        const result = calendar.currentDate;
        expect(result).to.eql(expectedResult);
    });
})
