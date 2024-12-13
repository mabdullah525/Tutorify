/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center: true,
      padding:{
        DEFAULT: '2rem',
      }
    },
    extend: {
      backgroundImage: {
        // Define a custom linear gradient
        'custom-gradient': 'linear-gradient(139.15deg, #F1C365 7.67%, #F6AE54 40.13%, #FF922F 59.18%)',
      },
      boxShadow: {
        'custom': '0px 20px 52.29px rgba(68, 68, 68, 0.04)', // Add custom shadow here
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        'primary': '#FF922F',
        'secondary': '#407F55',
        'bottom-border': '#C4C4C4',
        'texts': '#6C6C6C',
        'btn-colors': '#058E6E',
      },
      screens: {
        'xs': '320px',
        'sm-xs':'481px',  
      },
      padding: {
        'xs-1': '13px',  // Add padding-x of 1rem for xs screen size
        'md-2': '20px',  // Add padding-x of 2rem for
        'xs-3': '25px',  // Add padding-x of 2rem for
        'xs-4': '30px',  // Add padding-x of 2rem for
      }
    },
  },
  plugins: [],
}
