export default function componentStyleOverrides(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        :root {
          --text-primary: ${theme.textPrimary};
        }
        a {
          color: ${theme.colors.primaryMain}
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
