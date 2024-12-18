import axios from 'axios'

const categories = [
  { name: 'Technology', description: 'Explore the latest trends and insights in technology and innovation.' },
  { name: 'Health & Wellness', description: 'Discover tips and advice for a healthier and balanced lifestyle.' },
  { name: 'Travel', description: 'Find travel inspiration and guides to explore new destinations.' },
  { name: 'Food & Recipes', description: 'Delight in culinary creations and explore recipes from around the world.' },
  { name: 'Finance', description: 'Learn how to manage your money and achieve financial freedom.' },
  { name: 'Personal Development', description: 'Empower yourself with strategies for personal growth and success.' },
  { name: 'Education', description: 'Resources and tips to enhance learning and teaching.' },
  { name: 'Entertainment', description: 'Stay updated on movies, music, books, and more.' },
  { name: 'Sports', description: 'Follow the latest sports news, events, and commentary.' },
  { name: 'Fashion & Beauty', description: 'Get inspired by trends and tips in fashion and beauty.' }
];

async function populateCategories() {
  try {
    for (const category of categories) {
      const response = await axios.post('http://localhost:3005/api/categories/', category);
      console.log(`Category "${category.name}" added with response:`, response.data);
    }
    console.log('All categories have been successfully added.');
  } catch (error) {
    console.error('Error adding categories:', error.response?.data || error.message);
  }
}

populateCategories();
