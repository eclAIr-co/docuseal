module.exports = {
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        // eclAIr's paper (Keith, 1 Nov 2026). Tokens from eclAIr's public/tokens.css; no red anywhere: error reads as orange.
        docuseal: {
          'color-scheme': 'light',
          primary: '#1a1a1a',
          'primary-content': '#fafaf8',
          secondary: '#73879f',
          accent: '#5a8a7a',
          neutral: '#1a1a1a',
          'neutral-content': '#fafaf8',
          'base-100': '#fafaf8',
          'base-200': '#f1f0ec',
          'base-300': '#e0e0dc',
          'base-content': '#1a1a1a',
          info: '#73879f',
          success: '#5a8a7a',
          warning: '#c06a3e',
          error: '#c06a3e',
          '--rounded-box': '2px',
          '--rounded-btn': '2px',
          '--rounded-badge': '2px',
          '--animation-btn': '0s',
          '--animation-input': '0s',
          '--btn-focus-scale': '1',
          '--tab-border': '1px',
          '--tab-radius': '2px'
        },
        // eclAIr's night paper: warm umber, signals lifted to keep their meanings.
        'docuseal-night': {
          'color-scheme': 'dark',
          primary: '#ecebe5',
          'primary-content': '#1d1c19',
          secondary: '#a7b9cf',
          accent: '#7fae9e',
          neutral: '#ecebe5',
          'neutral-content': '#1d1c19',
          'base-100': '#1d1c19',
          'base-200': '#25241f',
          'base-300': '#3a3832',
          'base-content': '#ecebe5',
          info: '#a7b9cf',
          success: '#7fae9e',
          warning: '#e0895c',
          error: '#e0895c',
          '--rounded-box': '2px',
          '--rounded-btn': '2px',
          '--rounded-badge': '2px',
          '--animation-btn': '0s',
          '--animation-input': '0s',
          '--btn-focus-scale': '1',
          '--tab-border': '1px',
          '--tab-radius': '2px'
        }
      }
    ]
  }
}
