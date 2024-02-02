// import original module declarations
import "styled-components";
import { Theme } from "./types/Theme";

// and extend them!
declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
