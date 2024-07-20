document.addEventListener('DOMContentLoaded', (event) => {
  const fetchButton = document.getElementById('fetchButton');
  fetchButton.addEventListener('click', fetchPosts);
});

// 使用从 CDN 加载的 MediumClient
const medium = new window.MediumClient('YOUR_ACCESS_TOKEN');

async function fetchPosts() {
  const username = document.getElementById('username').value;
  if (!username) {
      alert('Please enter a Medium username.');
      return;
  }

  try {
      const posts = await medium.getPosts(username);
      document.getElementById('posts').textContent = JSON.stringify(posts, null, 2);
  } catch (error) {
      console.error(`Error fetching posts: ${error}`);
      document.getElementById('posts').textContent = `Error: ${error.message}`;
  }
}
