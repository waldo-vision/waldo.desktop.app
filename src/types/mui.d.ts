import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette extends MuiPallete {
    comp: {
      nav:{
        bell: {
          bg: string,
          color: string
        }
        windowControls: {
            primary: string
            secondary: string
        }
      },
      settings:{
        bg: string,
        textField: string
      }
    };
  }
  interface PaletteOptions extends MuiPaletteOptions {
    comp?: {
      nav?:{
        bell?: {
          bg?: string,
          color?: string
        }
        windowControls?: {
            primary?: string
            secondary?: string
        }
      },
      settings:{
        bg?: string,
        textField?: string
      }
    };
  }
}