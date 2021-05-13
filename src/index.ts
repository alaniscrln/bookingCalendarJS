import { BookingCalendar } from './app/views/BookingCalendar';
import './assets/sass/styles.scss';
window.onload = function () {
  const calendar = new BookingCalendar('es', 'container');
  calendar.init();
}
