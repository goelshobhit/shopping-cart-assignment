/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  home: () => _t(translations.home, 'Home'),
  product: () => _t(translations.product, 'Product'),
  signIn: () => _t(translations.signIn, 'SignIn'),
  register: () => _t(translations.register, 'Register'),
};