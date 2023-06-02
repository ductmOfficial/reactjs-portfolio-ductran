export default function componentStyleOverrides(palette) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --text-primary: ${palette.text.primary};
          --text-secondary: ${palette.text.secondary};
        }
        a {
          color: 'var(--text-primary)'
        }
    `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
          boxShadow: 'unset',
        },
      },
    },
  };
}
