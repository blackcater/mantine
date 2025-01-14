import { createUseStyles } from 'react-jss';
import { theming, MantineTheme } from '@mantine/core';

export default createUseStyles(
  (theme: MantineTheme) => ({
    wrapper: {
      position: 'relative',
      marginBottom: theme.spacing.xl,
    },

    code: {
      boxSizing: 'border-box',
      position: 'relative',
      fontFamily: 'Menlo, Monaco, Lucida Console, monospace',
      lineHeight: 1.7,
      fontSize: 13,
      overflowX: 'auto',
      borderRadius: theme.radius.sm,
      padding: [theme.spacing.md, theme.spacing.lg],
    },

    copy: {
      position: 'absolute',
      top: theme.spacing.xs,
      right: theme.spacing.xs,
      zIndex: 2,
    },
  }),
  { theming }
);
