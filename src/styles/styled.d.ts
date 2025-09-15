// src/styles/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
      accent: string;
      light: string;
    };
    fonts: {
      montserrat: string;
      bold: number;
      light: number;
    };
  }
}
