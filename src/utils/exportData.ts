// Export current database state to console
// Run this in the browser console to get the current data

import { localDB } from '../data/localDatabase';

export async function exportCurrentData() {
  try {
    const blogs = await localDB.getAll('blogs');
    const galleryImages = await localDB.getAll('gallery_images');
    const videos = await localDB.getAll('videos');
    const services = await localDB.getAll('services');

    console.log('=== CURRENT DATABASE STATE ===');
    console.log('\n--- BLOGS ---');
    console.log(JSON.stringify(blogs, null, 2));
    
    console.log('\n--- GALLERY IMAGES ---');
    console.log(JSON.stringify(galleryImages, null, 2));
    
    console.log('\n--- VIDEOS ---');
    console.log(JSON.stringify(videos, null, 2));
    
    console.log('\n--- SERVICES ---');
    console.log(JSON.stringify(services, null, 2));
    
    console.log('\n=== EXPORT COMPLETE ===');
    console.log('Copy the data above and save it to the appropriate data files.');
    
    return { blogs, galleryImages, videos, services };
  } catch (error) {
    console.error('Error exporting data:', error);
    throw error;
  }
}

// Make it available globally for browser console access
if (typeof window !== 'undefined') {
  (window as any).exportCurrentData = exportCurrentData;
  console.log('Data export function available. Run: exportCurrentData()');
} 