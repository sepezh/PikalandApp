import {I18nManager} from "react-native";
import I18n from "react-native-i18n";

import en from "./en.json";
import fa from "./fa.json";

I18n.fallbacks = true;

I18n.translations = {
  en,
  fa,
};

const currentLocale = I18n.currentLocale();

export const isRTL =
  currentLocale.indexOf("fa") === 0 || currentLocale.indexOf("ar") === 0;

I18nManager.allowRTL(isRTL);

export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
