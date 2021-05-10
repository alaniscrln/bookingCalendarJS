import { BookingCalendar } from './app/Views/BookingCalendar';
import './assets/sass/styles.scss';
window.onload = function () {
  const calendar = new BookingCalendar('es', 'container');
  calendar.init();
}
