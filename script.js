const images = [
  // Nature Images
  {
    id: 1,
    url: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Mountain Landscape",
    category: "nature"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1719627/pexels-photo-1719627.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Forest Path",
    category: "nature"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1298684/pexels-photo-1298684.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Ocean Waves",
    category: "nature"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1905054/pexels-photo-1905054.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Sunset Sky",
    category: "nature"
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/831062/pexels-photo-831062.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Waterfall",
    category: "nature"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Desert Landscape",
    category: "nature"
  },

  // Art & Design Images
  {
    id: 7,
    url: "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Abstract Painting",
    category: "art"
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Colorful Street Art",
    category: "art"
  },
{
  id: 9,
  url: "https://images.pexels.com/photos/12248115/pexels-photo-12248115.jpeg?auto=compress&cs=tinysrgb&w=800",
  title: "Modern Sculpture",
  category: "art"
},

{
  id: 10,
  url: "https://images.pexels.com/photos/32755751/pexels-photo-32755751.jpeg?auto=compress&cs=tinysrgb&w=800",
  title: "Digital Art Display",
  category: "art"
},



  {
    id: 11,
    url: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Geometric Design",
    category: "art"
  },
  {
    id: 12,
    url: "https://images.pexels.com/photos/2887579/pexels-photo-2887579.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Creative Installation",
    category: "art"
  },

  // Animal Images
  {
    id: 13,
    url: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Golden Retriever",
    category: "animals"
  },
  {
    id: 14,
    url: "https://images.pexels.com/photos/7001091/pexels-photo-7001091.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "African Elephant",
    category: "animals"
  },
  {
    id: 15,
    url: "https://images.pexels.com/photos/2127871/pexels-photo-2127871.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Wild Cat",
    category: "animals"
  },
  {
    id: 16,
    url: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Colorful Parrot",
    category: "animals"
  },
  {
    id: 17,
    url: "https://images.pexels.com/photos/1730760/pexels-photo-1730760.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Majestic Horse",
    category: "animals"
  },
  {
    id: 18,
    url: "https://images.pexels.com/photos/1986374/pexels-photo-1986374.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Ocean Dolphin",
    category: "animals"
  },

  // Portrait Images
  {
    id: 19,
    url: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Portrait Photography",
    category: "portraits"
  },
  {
    id: 20,
    url: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Business Portrait",
    category: "portraits"
  },
  {
    id: 21,
    url: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Fashion Portrait",
    category: "portraits"
  },
  {
    id: 22,
    url: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Creative Portrait",
    category: "portraits"
  },
  {
    id: 23,
    url: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Studio Portrait",
    category: "portraits"
  },
  {
    id: 24,
    url: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Natural Light Portrait",
    category: "portraits"
  },

  // Gaming & Tech Images
  {
    id: 25,
    url: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Gaming Setup",
    category: "games"
  },
  {
    id: 26,
    url: "https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Game Controller",
    category: "games"
  },
  {
    id: 27,
    url: "https://images.pexels.com/photos/7213192/pexels-photo-7213192.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Tech Workspace",
    category: "games"
  },
  {
    id: 28,
    url: "https://images.pexels.com/photos/4389742/pexels-photo-4389742.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "VR Gaming",
    category: "games"
  },
  {
    id: 29,
    url: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Gaming Keyboard",
    category: "games"
  },
  {
    id: 30,
    url: "https://images.pexels.com/photos/6321412/pexels-photo-6321412.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Mobile Gaming",
    category: "games"
  }
];

// Global variables
let currentImageIndex = 0;
let filteredImages = [...images];

// DOM elements
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCategory = document.getElementById('lightboxCategory');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize the gallery
function initGallery() {
    renderGallery(images);
    setupEventListeners();
}

// Render gallery items
function renderGallery(imagesToRender) {
    gallery.innerHTML = '';
    
    imagesToRender.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-category', image.category);
        galleryItem.innerHTML = `
            <img src="${image.url}" alt="${image.title}" loading="lazy">
            <div class="gallery-item-overlay">
                <div class="gallery-item-info">
                    <h3>${image.title}</h3>
                    <p>${capitalizeFirst(image.category)}</p>
                </div>
            </div>
            <div class="category-tag">${getCategoryIcon(image.category)} ${capitalizeFirst(image.category)}</div>
        `;
        
        galleryItem.addEventListener('click', () => openLightbox(index));
        gallery.appendChild(galleryItem);
    });
}

// Get category icon
function getCategoryIcon(category) {
    const icons = {
        nature: '🌿',
        art: '🎨',
        animals: '🐾',
        portraits: '👤',
        games: '🎮'
    };
    return icons[category] || '';
}

// Open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    const image = filteredImages[index];
    
    lightboxImg.src = image.url;
    lightboxTitle.textContent = image.title;
    lightboxCategory.textContent = `${getCategoryIcon(image.category)} ${capitalizeFirst(image.category)}`;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navigate to previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    updateLightboxImage();
}

// Navigate to next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
    updateLightboxImage();
}

// Update lightbox image
function updateLightboxImage() {
    const image = filteredImages[currentImageIndex];
    lightboxImg.src = image.url;
    lightboxTitle.textContent = image.title;
    lightboxCategory.textContent = `${getCategoryIcon(image.category)} ${capitalizeFirst(image.category)}`;
}

// Filter images by category
function filterImages(category) {
    if (category === 'all') {
        filteredImages = [...images];
    } else {
        filteredImages = images.filter(image => image.category === category);
    }
    
    // Add animation class
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.style.animation = 'none';
    });
    
    // Re-render gallery
    renderGallery(filteredImages);
    
    // Update active filter button
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterImages(filter);
        });
    });
    
    // Lightbox controls
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    // Close lightbox when clicking outside
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        }
    });
    
    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextImage(); // Swipe left - next image
            } else {
                prevImage(); // Swipe right - previous image
            }
        }
    }
}

// Utility function to capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize the gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', initGallery);