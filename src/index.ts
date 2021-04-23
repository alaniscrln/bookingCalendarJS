import { BookingCalendar } from './app/BookingCalendar';

window.onload = function () {
  const calendar = new BookingCalendar('es', 'key', 'container');
  calendar.init();
}
