import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    gradients: {
      light: string;
      dark1: string;
    };
    primary: {
      white: string;
      mint1: string;
      mint2: string;
      mint3: string;
      hot1: string;
      hot2: string;
      hot3: string;
      pop1: string;
      pop2: string;
      pop3: string;
      sea1: string;
      sea2: string;
      sea3: string;
    };
    accent: {
      orange: string;
      purple: string;
      cyan: string;
    };
    black: {
      matteblack: string;
      dark1: string;
      dark2: string;
      dark3: string;
      dark4: string;
    };
  }
}
