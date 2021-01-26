import * as React from "react";
import { Global } from "@emotion/react";

export const Fonts = () => (
  <Global
    styles={`
      /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */
    
      /* latin-ext */
      @font-face {
        font-family: 'DM Mono';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/dmmono/v2/aFTU7PB1QTsUX8KYthSQBK6PYK3EXw.woff2) format('woff2');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'DM Mono';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/dmmono/v2/aFTU7PB1QTsUX8KYthqQBK6PYK0.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }


  
      /* latin */
      @font-face {
        font-family: 'Hind';
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/hind/v11/5aU69_a8oxmIdGl4BDGwgDI.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

    /* latin */
    @font-face {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/spacegrotesk/v1/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj62UXskPMZBSSJLm2E.woff) format('woff');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* latin-ext */
@font-face {
  font-family: 'Fraunces';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/fraunces/v5/6NVf8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9sPEKsxx664UJf1hLTc7frUlkMz3lR27gVA.woff) format('woff');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Fraunces';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/fraunces/v5/6NVf8FyLNQOQZAnv9ZwNjucMHVn85Ni7emAe9lKqZTnbB-gzTK0K1ChJdt9vIVYX9G37lvd9sPEKsxx664UJf1hLTc7RrUlkMz3lR24.woff) format('woff');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

    @font-face {
      font-family: 'Cutive Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/cutivemono/v9/m8JWjfRfY7WVjVi2E-K9H6RMTm6o39ucNvc.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Cutive Mono';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/cutivemono/v9/m8JWjfRfY7WVjVi2E-K9H6RCTm6o39uc.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
      
      `}
  />
);
