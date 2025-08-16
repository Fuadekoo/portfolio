import { heroui } from "@heroui/react";

export default heroui({
  themes: {
    light: {
      extend: "light",
      colors: {
        background: "#F8FAFC", // slate-50
        foreground: "#0F172A", // slate-900

        // Primary: Blue
        primary: {
          foreground: "#FFFFFF",
          DEFAULT: "#2563EB", // blue-600
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },

        // Secondary: Gray (Slate)
        secondary: {
          foreground: "#FFFFFF",
          DEFAULT: "#475569", // slate-600
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },

        // Accent/Success: Green (Emerald)
        success: {
          foreground: "#FFFFFF",
          DEFAULT: "#059669", // emerald-600
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
      },
    },

    dark: {
      extend: "dark",
      colors: {
        background: "#0F172A", // slate-900
        foreground: "#E2E8F0", // slate-200

        // Primary: Blue
        primary: {
          foreground: "#FFFFFF",
          DEFAULT: "#3B82F6", // blue-500 for better dark contrast
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },

        // Secondary: Gray (Slate)
        secondary: {
          foreground: "#FFFFFF",
          DEFAULT: "#64748B", // slate-500
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },

        // Accent/Success: Green (Emerald)
        success: {
          foreground: "#FFFFFF",
          DEFAULT: "#10B981", // emerald-500
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B",
        },
      },
    },
  },
});
