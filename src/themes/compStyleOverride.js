import { borderRadius } from 'constants/theme';

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
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius(),
          borderBottom: 'unset',
          // '&:before, &:after': {
          //   borderBottom: 'unset',
          // },
          // '&:hover:not(.Mui-disabled, .Mui-error):before': {
          //   borderBottom: 'unset',
          // },
          // '&.Mui-focused:after': {
          //   borderBottom: 'unset',
          // },
        },
      },
    },
  };
}
