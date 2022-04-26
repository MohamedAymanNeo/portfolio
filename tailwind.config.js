module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Merriweather']
      },
      colors: {
        bgColor: '#faeee7',
        textColor: '#33272a',
        hoverColor: '#f7c9c9',
        linkColor: '#25232d',
        secondery: '#594a4e',
      }
    },
  },
  plugins: [],
}
