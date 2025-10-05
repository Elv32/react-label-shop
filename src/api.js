// src/api.js

const baseUrl = 'http://localhost:3000'; // Replace with your backend server URL

export async function fetchHomePageData() {
  try {
    const response = await fetch(`${baseUrl}/api/homepage`); // Replace with your actual API endpoint
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

