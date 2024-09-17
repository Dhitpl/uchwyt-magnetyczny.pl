import type { Preview } from "@storybook/react";

import "~/styles/globals.css";

import nextIntl from "./next-intl";

const preview: Preview = {
  initialGlobals: {
    locale: "pl",
    locales: {
      en: { icon: "🇺🇸", title: "English", right: "EN" },
      pl: { icon: "🇵🇱", title: "Polski", right: "PL" },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextIntl,
  },
};

export default preview;
