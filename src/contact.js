export const contact = (content) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h2>Contact Us</h2>
      <p>Phone: 123-456-789</p>
      <p>Email: info@restaurant.com</p>
      <p>Address: 123 Main St, City, Country</p>
    `;
    content.appendChild(div);
  };