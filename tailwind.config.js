module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Merriweather']
      },
      colors: {
        bgColor: '#111',
        textColor: '#33272a',
        hoverColor: '#f7c9c9',
        linkColor: '#25232d',
        secondery: '#ffb400',
        customBg: '#2b2a2a',
        iconColor: '#ddd',
        titleBgRgba: '#ffffff12',
        menuBg: {
          light: '#eee',
          dark: '#252525',
          300: '#333'
        },
        menuTextColor: '#666',
      },
      zIndex:  {
        '3': '3',
        '2': '2',
        '1': '1',
        '-1': '-1',
      },
      inset: {
        '-83%':'-83%',
        '42%':'42%',
        '32%':'32%',
        '15%':'15%',
      },
      lineHeight: {
        '0':'0',
        '12': '3rem',
        '14': '4rem'
      },
      borderWidth: {
        '1':'1px'
      },
      fontSize: {
        '5.5xl': '3.5rem',
        '2.5xl': '1.625rem',
        '8.5xl': '6.875rem',
      },
      letterSpacing: {
        '10px': '0.625rem'
      },
      borderRadius: {
        '4xl':'2rem',
        '5xl':'2.2rem',
        '50%':'50%'
      },
      width: {
        'cst':'3.2rem',
        '600px':'38rem',
        '55px':'55px',
      },
      height: {
        '1px':'1px',
        'cst':'3.2rem',
        '2full': '200%',
        '55px':'55px',
      },
      padding: {
        '18': '4.375rem'
      }
    },
  },
  plugins: [],
}
