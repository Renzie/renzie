module.exports = {
  theme: {
    container: {
      center: true
    },
    screens: {
     sm: '640px',
     md: '768px',
     lg: '1024px',
     xl: '1280px',
   },
   colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c'
    },
   fontFamily: {
     display: ['Gilroy', 'sans-serif'],
     body: ['Graphik', 'sans-serif'],
   },
   // .transition-{property}
    transitionProperty: {
      none: 'none',
      all: 'all',
      default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },


    // .ease-{timingFunction}
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    // .duration-{duration}
    transitionDuration: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },


   borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
       cyan: '#9cdbff',
     },
     spacing: {
       '96': '24rem',
       '128': '32rem',
     }
   }
  },
  variants: {},
  plugins: []
}
}
