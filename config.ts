// The routing layer is located in the app component. In the current project version, 
// adding or modifying languages in the config does not automatically create new routes.
// If you're adding or changing languages, you should go back to the app folder and create 
// corresponding routes.

export const supportedLang = [
  { en: "English" },
  { es: "Español" },
  { fr: "Français" },
  { it: "Italiano" },
  { de: "Deutsch" },
  { ru: "Русский" },
];
export const defaultdLang = "en";

export const tintColorLight = "#2f95dc";
export const tintColorDark = "#fff";
const Colors = {
    tintColorLight: "#2f95dc",
    tintColorDark: "#fff",
    light: {
      text: "#000",
      subTitle: "#18191a",
      background: "#fff",
      backgroundNav: "#e4e6eb",
      borderLine: "#caccce",
      tint: tintColorLight, 
      tabIconDefault: "#ccc",
      tabIconSelected: tintColorLight, 
      iconColors: "rgba(0, 0, 0, 1)",
      transporentButton: "rgba(255, 255, 255, 0.4)",
      borderBottomLine: "#46B2BC",
    },
    dark: {
      text: "#fff",
      subTitle: "#caccce",
      background: "#282828",
      backgroundNav: "#18191a",
      borderLine: "#3a3b3c",
      tint: tintColorDark, 
      tabIconDefault: "#ccc",
      tabIconSelected: tintColorDark, 
      iconColors: "rgba(230, 230, 230, 1)",
      transporentButton: "rgba(0, 0, 0, 0.4)",
      borderBottomLine: "#e91e63",
    },
  };
  
  export default Colors;

