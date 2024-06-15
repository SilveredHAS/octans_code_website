"use client";
import { Inter, Karantina, Karla, Noto_Sans } from "next/font/google";
import "./globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const inter = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-lexend",
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  breakpoints: {
    values: {
      xs: 0,
      xssm: 360,
      xsm: 375,
      xsmm: 414,
      sm: 600,
      smmd: 800,
      md: 900,
      mdlg: 1020,
      lg: 1200,
      lggxl: 1270,
      lgxxl: 1360,
      lgxl: 1440,
      xl: 1520,
      xxl: 1920,
      xxxl: 2560,
      xxxxl: 2860,
      xxxxxl: 3072,
    },
  },
  typography: {
    fontFamily: [
      inter.style.fontFamily,
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
  },
});

lightTheme.typography.h1 = {
  fontWeight: "700",
  [lightTheme.breakpoints.up("xs")]: {
    fontSize: "1.6rem",
  },
  [lightTheme.breakpoints.up("xssm")]: {
    fontSize: "1.35rem",
  },
  [lightTheme.breakpoints.up("xsm")]: {
    fontSize: "2rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "3.1rem",
  },
  [lightTheme.breakpoints.up("md")]: {
    fontSize: "3.6rem",
  },
  [lightTheme.breakpoints.up("mdlg")]: {
    fontSize: "2.4rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "2.7rem",
  },
  [lightTheme.breakpoints.up("lgxl")]: {
    fontSize: "3.4rem",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "3.6rem",
  },
  [lightTheme.breakpoints.up("xxl")]: {
    fontSize: "4.4rem",
  },
  [lightTheme.breakpoints.up("xxxl")]: {
    fontSize: "5.5rem",
  },
  [lightTheme.breakpoints.up("xxxxl")]: {
    fontSize: "7rem",
  },
  [lightTheme.breakpoints.up("xxxxxl")]: {
    fontSize: "7.6rem",
  },
};

lightTheme.typography.h2 = {
  fontWeight: "600",
  [lightTheme.breakpoints.up("xs")]: {
    fontSize: "1.15rem",
  },
  [lightTheme.breakpoints.up("xssm")]: {
    fontSize: "1.95rem",
  },
  [lightTheme.breakpoints.up("xsm")]: {
    fontSize: "1.45rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "2.3rem",
  },
  [lightTheme.breakpoints.up("md")]: {
    fontSize: "2.1rem",
  },
  [lightTheme.breakpoints.up("mdlg")]: {
    fontSize: "1.8rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "2.2rem",
  },
  [lightTheme.breakpoints.up("xxl")]: {
    fontSize: "2.1rem",
  },
  [lightTheme.breakpoints.up("xxxl")]: {
    fontSize: "2.6rem",
  },
  [lightTheme.breakpoints.up("xxxxl")]: {
    fontSize: "3.3rem",
  },
  [lightTheme.breakpoints.up("xxxxxl")]: {
    fontSize: "3.6rem",
  },
};

lightTheme.typography.h3 = {
  fontWeight: "500",
  [lightTheme.breakpoints.up("xs")]: {
    fontSize: "1.1rem",
  },
  [lightTheme.breakpoints.up("xssm")]: {
    fontSize: "1.35rem",
  },
  [lightTheme.breakpoints.up("xsm")]: {
    fontSize: "1.35rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "1.9rem",
  },
  [lightTheme.breakpoints.up("md")]: {
    fontSize: "1.9rem",
  },
  [lightTheme.breakpoints.up("mdlg")]: {
    fontSize: "2.4rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "1.8rem",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "1.661rem",
  },
  [lightTheme.breakpoints.up("xxl")]: {
    fontSize: "1.8rem",
  },
  [lightTheme.breakpoints.up("xxxl")]: {
    fontSize: "1.9rem",
  },
  [lightTheme.breakpoints.up("xxxxl")]: {
    fontSize: "2rem",
  },
  [lightTheme.breakpoints.up("xxxxxl")]: {
    fontSize: "2.1rem",
  },
};

lightTheme.typography.h4 = {
  fontWeight: "400",
  [lightTheme.breakpoints.up("xs")]: {
    fontSize: "1.05rem",
  },
  [lightTheme.breakpoints.up("xssm")]: {
    fontSize: "1.25rem",
  },
  [lightTheme.breakpoints.up("xsm")]: {
    fontSize: "1.25rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "1.7rem",
  },
  [lightTheme.breakpoints.up("md")]: {
    fontSize: "1.7rem",
  },
  [lightTheme.breakpoints.up("mdlg")]: {
    fontSize: "2.4rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "1.6rem",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "1.547rem",
  },
  [lightTheme.breakpoints.up("xxl")]: {
    fontSize: "1.9rem",
  },
  [lightTheme.breakpoints.up("xxxl")]: {
    fontSize: "2.1rem",
  },
  [lightTheme.breakpoints.up("xxxxl")]: {
    fontSize: "2.5rem",
  },
  [lightTheme.breakpoints.up("xxxxxl")]: {
    fontSize: "2.8rem",
  },
};

lightTheme.typography.h5 = {
  fontWeight: "300",
  [lightTheme.breakpoints.up("xs")]: {
    fontSize: "1.1rem",
  },
  [lightTheme.breakpoints.up("xssm")]: {
    fontSize: "1.15rem",
  },
  [lightTheme.breakpoints.up("xsm")]: {
    fontSize: "1.3rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "1.6rem",
  },
  [lightTheme.breakpoints.up("smmd")]: {
    fontSize: "1.8rem",
  },
  [lightTheme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  [lightTheme.breakpoints.up("mdlg")]: {
    fontSize: "1.1rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "1.25rem",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "1.433rem",
  },
  [lightTheme.breakpoints.up("xxl")]: {
    fontSize: "1.8rem",
  },
  [lightTheme.breakpoints.up("xxxl")]: {
    fontSize: "2.3rem",
  },
  [lightTheme.breakpoints.up("xxxxl")]: {
    fontSize: "2.8rem",
  },
  [lightTheme.breakpoints.up("xxxxxl")]: {
    fontSize: "3.3rem",
  },
};

lightTheme.typography.h6 = {
  fontWeight: "400",
  [lightTheme.breakpoints.up("xs")]: {
    fontSize: "0.85rem",
  },
  [lightTheme.breakpoints.up("xssm")]: {
    fontSize: "0.9rem",
  },
  [lightTheme.breakpoints.up("xsm")]: {
    fontSize: "1rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "1.3rem",
  },
  [lightTheme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
  [lightTheme.breakpoints.up("mdlg")]: {
    fontSize: "1.1rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "1.2rem",
  },
  [lightTheme.breakpoints.up("lgxl")]: {
    fontSize: "1.3rem",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "1.319rem",
  },
  [lightTheme.breakpoints.up("xxl")]: {
    fontSize: "1.65rem",
  },
  [lightTheme.breakpoints.up("xxxl")]: {
    fontSize: "2rem",
  },
  [lightTheme.breakpoints.up("xxxxl")]: {
    fontSize: "2.2rem",
  },
  [lightTheme.breakpoints.up("xxxxxl")]: {
    fontSize: "2.5rem",
  },
};

lightTheme.typography.subtitle1 = {
  fontWeight: "400",
  [lightTheme.breakpoints.up("xs")]: {
    fontSize: "0.9rem",
  },
  [lightTheme.breakpoints.up("xssm")]: {
    fontSize: "1rem",
  },
  [lightTheme.breakpoints.up("xsm")]: {
    fontSize: "1rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "1.35rem",
  },
  [lightTheme.breakpoints.up("md")]: {
    fontSize: "1.5rem",
  },
  [lightTheme.breakpoints.up("mdlg")]: {
    fontSize: "1rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "1.05rem",
  },
  [lightTheme.breakpoints.up("lgxl")]: {
    fontSize: "1.15rem",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "1.205rem",
  },
  [lightTheme.breakpoints.up("xxl")]: {
    fontSize: "1.4rem",
  },
  [lightTheme.breakpoints.up("xxxl")]: {
    fontSize: "2rem",
  },
  [lightTheme.breakpoints.up("xxxxl")]: {
    fontSize: "2.2rem",
  },
  [lightTheme.breakpoints.up("xxxxxl")]: {
    fontSize: "2.5rem",
  },
};

lightTheme.typography.subtitle2 = {
  fontWeight: "300",
  [lightTheme.breakpoints.up("xs")]: {
    fontSize: "0.85rem",
  },
  [lightTheme.breakpoints.up("xssm")]: {
    fontSize: "0.85rem",
  },
  [lightTheme.breakpoints.up("xsm")]: {
    fontSize: "1rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
  [lightTheme.breakpoints.up("md")]: {
    fontSize: "1.4rem",
  },
  [lightTheme.breakpoints.up("mdlg")]: {
    fontSize: "0.9rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "1rem",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "1.091rem",
  },
  [lightTheme.breakpoints.up("xxl")]: {
    fontSize: "1.4rem",
  },
  [lightTheme.breakpoints.up("xxxl")]: {
    fontSize: "1.75rem",
  },
  [lightTheme.breakpoints.up("xxxxl")]: {
    fontSize: "2rem",
  },
  [lightTheme.breakpoints.up("xxxxxl")]: {
    fontSize: "2.25rem",
  },
};

lightTheme.typography.body1 = {
  fontWeight: "400",
  [lightTheme.breakpoints.up("xs")]: {
    fontSize: "0.8rem",
  },
  [lightTheme.breakpoints.up("xssm")]: {
    fontSize: "0.75rem",
  },
  [lightTheme.breakpoints.up("xsm")]: {
    fontSize: "0.95rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "1.2rem",
  },
  [lightTheme.breakpoints.up("smmd")]: {
    fontSize: "1.4rem",
  },
  [lightTheme.breakpoints.up("md")]: {
    fontSize: "1.45rem",
  },
  [lightTheme.breakpoints.up("mdlg")]: {
    fontSize: "0.8rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "0.95rem",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "0.977rem",
  },
  [lightTheme.breakpoints.up("xxl")]: {
    fontSize: "1.3rem",
  },
  [lightTheme.breakpoints.up("xxxl")]: {
    fontSize: "1.8rem",
  },
  [lightTheme.breakpoints.up("xxxxl")]: {
    fontSize: "2.2rem",
  },
  [lightTheme.breakpoints.up("xxxxxl")]: {
    fontSize: "2.5rem",
  },
};

lightTheme.typography.body2 = {
  fontWeight: "300",
  [lightTheme.breakpoints.up("xs")]: {
    fontSize: "0.6rem",
  },
  [lightTheme.breakpoints.up("xssm")]: {
    fontSize: "0.7rem",
  },
  [lightTheme.breakpoints.up("xsm")]: {
    fontSize: "0.8rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "1.1rem",
  },
  [lightTheme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
  [lightTheme.breakpoints.up("mdlg")]: {
    fontSize: "1rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "0.9rem",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "0.864rem",
  },
  [lightTheme.breakpoints.up("xxl")]: {
    fontSize: "1.1rem",
  },
  [lightTheme.breakpoints.up("xxxl")]: {
    fontSize: "1.2rem",
  },
  [lightTheme.breakpoints.up("xxxxl")]: {
    fontSize: "1.35rem",
  },
  [lightTheme.breakpoints.up("xxxxxl")]: {
    fontSize: "1.5rem",
  },
};

lightTheme.typography.caption = {
  fontWeight: "300",
  [lightTheme.breakpoints.up("xs")]: {
    fontSize: "0.55rem",
  },
  [lightTheme.breakpoints.up("xssm")]: {
    fontSize: "0.75rem",
  },
  [lightTheme.breakpoints.up("xsm")]: {
    fontSize: "0.8rem",
  },
  [lightTheme.breakpoints.up("sm")]: {
    fontSize: "1.1rem",
  },
  [lightTheme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
  [lightTheme.breakpoints.up("mdlg")]: {
    fontSize: "2.4rem",
  },
  [lightTheme.breakpoints.up("lg")]: {
    fontSize: "0.8rem",
  },
  [lightTheme.breakpoints.up("xl")]: {
    fontSize: "0.65rem",
  },
  [lightTheme.breakpoints.up("xxl")]: {
    fontSize: "0.9rem",
  },
  [lightTheme.breakpoints.up("xxxl")]: {
    fontSize: "1.05rem",
  },
  [lightTheme.breakpoints.up("xxxxl")]: {
    fontSize: "1.1rem",
  },
  [lightTheme.breakpoints.up("xxxxxl")]: {
    fontSize: "1.2rem",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Octans Code | Web and App Development Company</title>
        <meta
          name="description"
          content="Leading web and app development company offering custom web development, app development, UI/UX design, SEO services, 24/7 maintenance, and domain & hosting services. Elevate your business with our expert solutions."
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
