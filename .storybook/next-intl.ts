import en from "../src/locales/en.json";
import pl from "../src/locales/pl.json";

const messagesByLocale: Record<string, any> = { en, pl };

const nextIntl = {
  defaultLocale: "en",
  messagesByLocale,
};

export default nextIntl;
