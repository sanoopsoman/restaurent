
export const homepage = (content) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h1>Welcome to Our Restaurant</h1>
      <p>Experience fine dining like never before...</p>
      <img src="restaurant.jpg" alt="Restaurant Image">
    `;
    content.appendChild(div);
  };
  