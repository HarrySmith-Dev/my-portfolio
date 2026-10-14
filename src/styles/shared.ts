export const colors = {
  white: '#FFFFFF',
  blueGray50: '#F0F3FA',
  blueGray200: '#CBD5E1',

  slate600: '#475569',
  slate700: '#334155',
  slate800: '#1E293B',

  blackAlpha50: '#00000080',
  danger: '#C81E1E',

  brandPrimary: '#0369A1',
  brandVite: '#535BF2',
  brandReact: '#61DAFB',
  brandTypeScript: '#3178C6',
  brandAws: '#FF9900',
}

export const typography = {
  fontFamilyBase: "'Jost Variable', sans-serif",
  fontSize: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    xxl: '30px',
    hero: '36px',
    display: '48px',
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
  },
}

export const spacing = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  24: '96px',
}

export const radii = {
  sm: '8px',
  md: '12px',
  lg: '20px',
  pill: '999px',
  round: '50%',
}

export const shadows = {
  card: `0 20px 25px -5px ${colors.blueGray200}`,
  cardHover: `0 28px 35px -5px ${colors.blueGray200}`,
  bottomNav: '0 -6px 24px -16px rgba(30, 41, 59, 0.35)',
}

export const layout = {
  pageMaxWidth: '1024px',
  pageGutter: spacing[5],
  bottomNavHeight: '72px',
}

export const mobileBreakpoint = `screen and (min-width: 600px)`
export const tabletBreakpoint = `screen and (min-width: 768px)`
export const desktopBreakpoint = `screen and (min-width: 1024px)`
