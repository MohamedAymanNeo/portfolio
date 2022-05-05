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
        menuBg: {
          light: '#eee',
          dark: '#252525'
        },
        menuTextColor: '#666',
      },
      zIndex:  {
        '3': '3',
        '-1': '-1',
      },
      lineHeight: {
        '12': '3rem'
      },
      borderRadius: {
        '4xl':'2rem'
      },
      width: {
        'cst':'3.2rem'
      },
      height: {
        'cst':'3.2rem'
      },
    },
  },
  plugins: [],
}
