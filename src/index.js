import { homepage } from './homepage';
import { menu } from './menu';
import { contact } from './contact';

const content = document.getElementById('content');

const clearContent = () => {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
};

document.getElementById('home-btn').addEventListener('click', () => {
  clearContent();
  homepage(content);
});

document.getElementById('menu-btn').addEventListener('click', () => {
  clearContent();
  menu(content);
});

document.getElementById('contact-btn').addEventListener('click', () => {
  clearContent();
  contact(content);
});

// Initial load
homepage(content);
        