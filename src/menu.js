export const menu = (content) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h2>Our Menu</h2>
      <ul>
        <li>Appetizers</li>
        <li>Main Courses</li>
        <li>Desserts</li>
      </ul>
    `;
    content.appendChild(div);
  };