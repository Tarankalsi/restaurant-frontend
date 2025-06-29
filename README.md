# Saveur Restaurant Website

A modern, responsive restaurant website built with React, TypeScript, and Tailwind CSS. This project clones the design from the provided reference and breaks it down into modular, reusable components.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Reservation widget, image carousel, dropdown menus
- **Modern UI**: Clean, elegant design with amber color scheme
- **TypeScript**: Full type safety throughout the application
- **Component-Based Architecture**: Modular, reusable components

## Project Structure

```
Restaurant/
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Navigation and contact info
│   │   ├── HeroSection.tsx         # Main hero with image carousel
│   │   ├── ReservationWidget.tsx   # Quick reservation form
│   │   ├── RestaurantOverview.tsx  # Features section
│   │   ├── FeaturedSections.tsx    # Alternating content sections
│   │   ├── Gallery.tsx             # Horizontal scrolling gallery
│   │   ├── ReservationForm.tsx     # Detailed reservation form
│   │   └── Footer.tsx              # Footer with contact info
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles and Tailwind imports
├── public/
├── package.json                    # Dependencies and scripts
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── vite.config.ts                  # Vite build configuration
```

## Components Breakdown

### Header Component
- Fixed navigation bar with contact information
- Social media links
- Language selector
- Sign-in functionality
- Mobile-responsive menu

### HeroSection Component
- Image carousel with automatic transitions
- Overlay text with call-to-action buttons
- Slide indicators
- Integrated reservation widget

### ReservationWidget Component
- Date picker with minimum date validation
- Time slot dropdown with predefined options
- Guest count selector
- Form validation and state management

### RestaurantOverview Component
- Three-column feature grid
- Icon-based feature cards
- Links to additional pages

### FeaturedSections Component
- Alternating layout (left/right image placement)
- Rich content sections with images
- Call-to-action buttons

### Gallery Component
- Horizontal scrolling image gallery
- Image captions with overlay
- Responsive design

### ReservationForm Component
- Split layout with contact information
- Comprehensive reservation form
- Terms and conditions checkbox
- Form validation

### Footer Component
- Four-column layout with contact info
- Newsletter signup
- Social media links
- Payment method icons
- Legal links

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **Font Awesome**: Icon library for UI elements

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd Restaurant
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors
The website uses an amber color scheme. You can customize colors in the `tailwind.config.js` file:

```javascript
theme: {
  extend: {
    colors: {
      'amber': {
        100: '#fef3c7',
        200: '#fde68a',
        500: '#f59e0b',
        700: '#b45309',
        800: '#92400e',
      }
    }
  }
}
```

### Images
Replace the placeholder images in each component with your own restaurant images. Update the `imageUrl` properties in the data arrays.

### Content
Modify the text content, contact information, and restaurant details in each component to match your restaurant's information.

## Responsive Design

The website is fully responsive and includes:
- Mobile-first design approach
- Breakpoints for tablet and desktop
- Touch-friendly interactive elements
- Optimized images for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes. Feel free to use and modify for your own restaurant website.

## Credits

- Design inspiration from the provided reference
- Images from Readdy AI API
- Icons from Font Awesome
- Built with React and Tailwind CSS 