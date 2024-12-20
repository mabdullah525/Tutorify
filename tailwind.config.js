/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
      }
    },
    extend: {
      backgroundImage: {
        // Define a custom linear gradient
        'custom-gradient': 'linear-gradient(139.15deg, #F1C365 7.67%, #F6AE54 40.13%, #FF922F 59.18%)',
        'orange-gradient': 'linear-gradient(270.04deg, #F1BF62 0.05%, #FF912E 97.84%)',
      },
      boxShadow: {
        'custom-multi': '0px -0.24px 3.06px 0px #0000000D, 0px -0.61px 7.73px 0px #00000013, 0px -1.24px 15.77px 0px #00000018, 0px -2.56px 32.49px 0px #0000001E, 0px -7px 89px 0px #0000002B',
        'custom-orange': '0px 1.33px 17.5px 0px #FB9C4615, 0px 2.88px 18.48px 0px #FB9C460F, 0px 9px 121px 0px #FB9C463B',
        'custom-hero': '0px 0.5px 44.7px 0px #FF922F13, 0px 4px 357px 0px #FF922F26',
        'custom-green': '0px -2px 128px 0px #058E6E24',
        'custom-triangle': '0px 22px 0px 0px #FB9C4612',
        'custom-g-btn': '0px 3.85px 3.62px 0px #407F5507,  0px 10.64px 10.02px 0px #407F550A, 0px 25.63px 24.12px 0px #407F550D, 0px 85px 80px 0px #407F5514',
        'input-shadow': '0px -1.24px 15.77px 0px #00000018, 0px -2.56px 32.49px 0px #0000001E',
        'button-shadow': '0px -0.24px 3.06px 0px #0000000D, 0px -0.61px 7.73px 0px #00000013, 0px -1.24px 15.77px 0px #00000018',
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'dm': ['DM Sans'],
      },
      colors: {
        'primary': '#FF922F',
        'secondary': '#407F55',
        'green': '#407F55',
        'input': '#FB9C46',
        'bottom-border': '#C4C4C4',
        'footer': '#F2BF62',
        'texts': '#6C6C6C',
        'border-col': '#CCCCCC',
        'check-purple': '#D3175B',
        'btn-colors': '#058E6E',
        'lesson-bg': '#F0D9CA',
        'rounded-bg': '#F6F6F6',
        'rounded-text': '#8D8D8D',
        'light-black': '#393939',
        'light-blue': '#90A3B4',
        'btn-col': '#979797',
        'lesson-circle': 'rgba(255, 146, 47, 0.5)',
      },
      screens: {
        'xs': '320px',
        'sm-xs': '481px',
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
