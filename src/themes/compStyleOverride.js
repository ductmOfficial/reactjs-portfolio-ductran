export default function componentStyleOverrides(palette) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --text-primary: ${palette.text.primary};
        }
        a {
          color: ${palette.primary.main}
        }
    `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'unset',
        },
      },
    },
  };
}
