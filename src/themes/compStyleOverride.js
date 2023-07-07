export default function componentStyleOverrides(palette) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --text-primary: ${palette.text.primary};
          --text-secondary: ${palette.text.secondary};
        },
        html {
          font-size: 16px;
        },
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
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '16px',
          '&:last-child': {
            paddingBottom: '16px',
          },
        },
      },
    },
  };
}
