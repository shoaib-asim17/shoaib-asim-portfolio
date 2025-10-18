// Centralized color system for the dark-themed portfolio
export const COLORS = {
  // Primary colors - Deep, luxurious dark theme
  background: "#0D0D0D",           // Charcoal black
  backgroundSecondary: "#1A1A1A",  // Slightly lighter black
  backgroundTertiary: "#2A2A2A",   // Card backgrounds
  
  // Accent colors - Futuristic neon palette
  primary: "#00FFFF",              // Neon cyan
  primaryHover: "#00E6E6",         // Lighter cyan for hover
  secondary: "#7A00FF",            // Purple
  secondaryHover: "#8A1AFF",       // Lighter purple for hover
  accent: "#FF00C8",               // Hot pink
  accentHover: "#FF1AD1",          // Lighter pink for hover
  
  // Text colors
  textPrimary: "#FFFFFF",          // Pure white
  textSecondary: "#A0A0A0",        // Light gray
  textTertiary: "#666666",         // Medium gray
  textMuted: "#404040",            // Dark gray
  
  // Glassmorphism and effects
  glassBackground: "rgba(26, 26, 26, 0.8)",
  glassBorder: "rgba(255, 255, 255, 0.1)",
  glowPrimary: "rgba(0, 255, 255, 0.3)",
  glowSecondary: "rgba(122, 0, 255, 0.3)",
  glowAccent: "rgba(255, 0, 200, 0.3)",
  
  // Gradients
  gradientPrimary: "linear-gradient(135deg, #00FFFF 0%, #7A00FF 100%)",
  gradientSecondary: "linear-gradient(135deg, #7A00FF 0%, #FF00C8 100%)",
  gradientAccent: "linear-gradient(135deg, #FF00C8 0%, #00FFFF 100%)",
  gradientBackground: "linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #0D0D0D 100%)",
  
  // Status colors
  success: "#00FF88",
  warning: "#FFB800",
  error: "#FF4444",
  info: "#00BFFF",
  
  // Border colors
  border: "rgba(255, 255, 255, 0.1)",
  borderHover: "rgba(0, 255, 255, 0.3)",
  borderFocus: "rgba(0, 255, 255, 0.5)",
};

// Animation presets
export const ANIMATIONS = {
  // Framer Motion variants
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  // Hover animations
  hoverGlow: {
    whileHover: {
      boxShadow: `0 0 20px ${COLORS.glowPrimary}`,
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  },
  
  hoverLift: {
    whileHover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  }
};

// Typography settings
export const TYPOGRAPHY = {
  fontFamily: {
    primary: ['Inter', 'system-ui', 'sans-serif'],
    secondary: ['Poppins', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace']
  },
  
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem'
  },
  
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900'
  }
};

// Spacing system
export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem'
};

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};
