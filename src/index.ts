import { BookingCalendar } from './app/BookingCalendar';
import './assets/sass/styles.scss';
window.onload = function () {
  const calendar = new BookingCalendar('es', 'key', 'container');
  calendar.init();
}
