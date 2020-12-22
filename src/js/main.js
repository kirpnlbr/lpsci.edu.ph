// Import Alpine.js
import 'alpinejs';

// Import Cruip utilities
import { focusHandling } from 'cruip-js-toolkit';

// Import aos
import AOS from 'aos';

// Import sticky-js
import Sticky from 'sticky-js';

AOS.init({
  once: true,
  disable: 'phone',
  duration: 700,
  easing: 'ease-out-cubic',
});

// eslint-disable-next-line no-unused-vars
const sticky = new Sticky('[data-sticky]');

// import component from './components/component';

document.addEventListener('DOMContentLoaded', () => {
  focusHandling('outline');
});
