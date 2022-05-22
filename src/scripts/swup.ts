import Swup from "swup";
import SwupFadeTheme from "@swup/fade-theme";
import SwupScriptsPlugin from "@swup/scripts-plugin";

const swup = new Swup({
  plugins: [new SwupScriptsPlugin(), new SwupFadeTheme()],
});
