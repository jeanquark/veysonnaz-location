import { browser } from '$app/environment'
import { init, register } from 'svelte-i18n'

const defaultLocale = 'fr-FR'

register('fr', () => import('./locales/fr.json'))
register('de', () => import('./locales/de.json'))
register('en', () => import('./locales/en.json'))

init({
    fallbackLocale: defaultLocale,
    initialLocale: browser ? window.navigator.language : defaultLocale,
})