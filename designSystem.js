// Design System for Quiz Application
// Based on the design system from the flipbook project

// Typography
export const typography = {
  fontFamily: "'Manrope', sans-serif",
  weights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.75rem', // 28px
  },
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Colors
export const colors = {
  // Primary
  primary: '#81EDFF',
  
  // Backgrounds
  background: '#EDEAE7',
  surface: '#FFFFFF',
  
  // Text
  text: {
    primary: '#222222',
    secondary: '#666666',
    disabled: '#BDBDBD',
    onPrimary: '#000000',
  },
  
  // Borders
  border: {
    light: '#DEDEDE',
    medium: '#CCCCCC',
    dark: '#999999',
  },
  
  // States
  states: {
    hover: '#81EDFF',
    active: '#6BD9EC',
    disabled: '#F5F5F5',
  },
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
};

// Shadows
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  modal: '0 8px 32px rgba(0, 0, 0, 0.1)',
  none: 'none',
};

// Spacing
export const spacing = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',  // 2px
  1: '0.25rem',     // 4px
  1.5: '0.375rem',  // 6px
  2: '0.5rem',      // 8px
  2.5: '0.625rem',  // 10px
  3: '0.75rem',     // 12px
  3.5: '0.875rem',  // 14px
  4: '1rem',        // 16px
  5: '1.25rem',     // 20px
  6: '1.5rem',      // 24px
  7: '1.75rem',     // 28px
  8: '2rem',        // 32px
  9: '2.25rem',     // 36px
  10: '2.5rem',     // 40px
  12: '3rem',       // 48px
  14: '3.5rem',     // 56px
  16: '4rem',       // 64px
  20: '5rem',       // 80px
  24: '6rem',       // 96px
  28: '7rem',       // 112px
  32: '8rem',       // 128px
  36: '9rem',       // 144px
  40: '10rem',      // 160px
  44: '11rem',      // 176px
  48: '12rem',      // 192px
  52: '13rem',      // 208px
  56: '14rem',      // 224px
  60: '15rem',      // 240px
  64: '16rem',      // 256px
  72: '18rem',      // 288px
  80: '20rem',      // 320px
  96: '24rem',      // 384px
};

// Border Radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',   // For pill-shaped elements
};

// Z-Indices
export const zIndex = {
  auto: 'auto',
  0: '0',
  10: '10',
  20: '20',
  30: '30',
  40: '40',
  50: '50',
  // Specific components
  navigation: '1000',
  modal: '1001',
  overlay: '1000',
  dropdown: '1002',
  tooltip: '1003',
  toast: '1004',
};

// Transitions
export const transitions = {
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  timing: {
    ease: 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
    'bounce': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  },
};

// Breakpoints
export const breakpoints = {
  sm: '640px',   // Mobile
  md: '768px',   // Tablet
  lg: '1024px',  // Laptop
  xl: '1280px',  // Desktop
  '2xl': '1536px', // Large Desktop
};

// Buttons
export const buttons = {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: typography.weights.medium,
    borderRadius: borderRadius.full,
    border: '1px solid',
    transition: `all ${transitions.duration.normal} ${transitions.timing.ease}`,
    cursor: 'pointer',
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    '&:focus': {
      outline: 'none',
      ring: `2px ${colors.primary}`, // For focus ring
    },
  },
  sizes: {
    sm: {
      padding: `${spacing[1.5]} ${spacing[3]}`,
      fontSize: typography.sizes.xs,
      lineHeight: typography.lineHeights.tight,
    },
    md: {
      padding: `${spacing[2]} ${spacing[4]}`,
      fontSize: typography.sizes.sm,
      lineHeight: typography.lineHeights.normal,
    },
    lg: {
      padding: `${spacing[2.5]} ${spacing[5]}`,
      fontSize: typography.sizes.base,
      lineHeight: typography.lineHeights.normal,
    },
    xl: {
      padding: `${spacing[3]} ${spacing[6]}`,
      fontSize: typography.sizes.lg,
      lineHeight: typography.lineHeights.relaxed,
    },
  },
  variants: {
    primary: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
      color: colors.text.onPrimary,
      '&:hover:not(:disabled)': {
        backgroundColor: colors.states.active,
        borderColor: colors.states.active,
      },
      '&:active:not(:disabled)': {
        transform: 'translateY(1px)',
      },
    },
    secondary: {
      backgroundColor: colors.background,
      borderColor: colors.border.light,
      color: colors.text.primary,
      '&:hover:not(:disabled)': {
        backgroundColor: colors.states.hover,
        borderColor: colors.states.hover,
        color: colors.text.onPrimary,
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      color: colors.text.primary,
      '&:hover:not(:disabled)': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
      },
    },
    icon: {
      width: '2.5rem',
      height: '2.5rem',
      padding: '0',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
      borderColor: colors.border.light,
      color: colors.text.primary,
      '&:hover:not(:disabled)': {
        backgroundColor: colors.states.hover,
        borderColor: colors.states.hover,
        color: colors.text.onPrimary,
      },
      '& svg': {
        width: '1.25rem',
        height: '1.25rem',
      },
    },
  },
};

// Cards
export const cards = {
  base: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    boxShadow: shadows.md,
    overflow: 'hidden',
  },
  padding: {
    sm: spacing[4],
    md: spacing[6],
    lg: spacing[8],
  },
};

// Forms
export const forms = {
  input: {
    base: {
      width: '100%',
      padding: `${spacing[2]} ${spacing[3]}`,
      fontSize: typography.sizes.base,
      lineHeight: typography.lineHeights.normal,
      color: colors.text.primary,
      backgroundColor: colors.surface,
      border: `1px solid ${colors.border.light}`,
      borderRadius: borderRadius.DEFAULT,
      transition: `border-color ${transitions.duration.normal} ${transitions.timing.ease}`,
      '&:focus': {
        outline: 'none',
        borderColor: colors.primary,
        boxShadow: `0 0 0 2px ${colors.primary}40`, // 40 = 25% opacity in hex
      },
      '&:disabled': {
        backgroundColor: colors.states.disabled,
        cursor: 'not-allowed',
      },
    },
    sizes: {
      sm: {
        padding: `${spacing[1.5]} ${spacing[2]}`,
        fontSize: typography.sizes.sm,
      },
      md: {
        padding: `${spacing[2]} ${spacing[3]}`,
        fontSize: typography.sizes.base,
      },
      lg: {
        padding: `${spacing[2.5]} ${spacing[4]}`,
        fontSize: typography.sizes.lg,
      },
    },
  },
  label: {
    base: {
      display: 'block',
      marginBottom: spacing[1],
      fontSize: typography.sizes.sm,
      fontWeight: typography.weights.medium,
      color: colors.text.primary,
    },
  },
  error: {
    color: '#DC2626',
    fontSize: typography.sizes.xs,
    marginTop: spacing[1],
  },
};

// Theme export
const theme = {
  colors,
  typography,
  shadows,
  spacing,
  borderRadius,
  zIndex,
  transitions,
  breakpoints,
  buttons,
  cards,
  forms,
  // Add more component styles as needed
};

export default theme;
