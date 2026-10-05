export const languages = { en: 'English', pl: 'Polski' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'en';

const strings = {
  en: {
    'site.description': 'Megu writes about software, hardware and programming. Mostly low-level, sometimes cute.',
    'nav.posts': 'posts',
    'nav.tags': 'tags',
    'nav.about': 'about',
    'home.title': "hi, i'm megu. i take computers apart",
    'home.titleTail': '(sometimes they go back together)',
    'home.lead': 'Notes from where code meets silicon: kernels, compilers, weird bugs, soldering mishaps and whatever else kept me up way too late. Powered by energy drinks.',
    'home.latest': 'latest posts',
    'home.empty': 'nothing here yet.',
    'post.minRead': 'min read',
    'post.updated': 'updated',
    'post.toc': 'contents',
    'post.readIn': 'read in',
    'post.noTranslation': 'no translation yet',
    'post.older': '← older',
    'post.newer': 'newer →',
    'tags.title': 'tags',
    'tags.description': 'All tags',
    'tag.description': 'Posts tagged',
    'about.title': 'about',
    'footer.fuel': ' and too much tea and energy drinks',
    'footer.built': 'made with',
    'theme.toggle': 'Toggle dark mode',
    'search.open': 'Search',
    'search.placeholder': 'Search…',
    'search.page': 'this page',
    'search.site': 'whole site',
    'search.empty': 'No results.',
    'search.hint': 'Enter to open · ↑↓ to move · Ctrl+K to switch scope · Esc to close',
    'search.matches': 'matches',
  },
  pl: {
    'site.description': 'Megu pisze o oprogramowaniu, sprzęcie i programowaniu. Głównie niskopoziomowo, czasem uroczo.',
    'nav.posts': 'wpisy',
    'nav.tags': 'tagi',
    'nav.about': 'o mnie',
    'home.title': 'cześć, tu megu. rozbieram komputery elektronike i co popadnie',
    'home.titleTail': '(czasem udaje się je złożyć z powrotem)',
    'home.lead': 'Notatki o kodzie i krzemie, sprzęcie i programowaniu: kernele, kompilatory, dziwne bugi, fuckupy z lutownicą i wszystko inne, przez co siedzę po nocach, chlejąc hektolitry energoli',
    'home.latest': 'najnowsze wpisy',
    'home.empty': 'jeszcze nic tu nie ma.',
    'post.minRead': 'min czytania',
    'post.updated': 'zaktualizowano',
    'post.toc': 'spis treści',
    'post.readIn': 'czytaj po',
    'post.noTranslation': 'brak tłumaczenia',
    'post.older': '← starsze',
    'post.newer': 'nowsze →',
    'tags.title': 'tagi',
    'tags.description': 'Wszystkie tagi',
    'tag.description': 'Wpisy z tagiem',
    'about.title': 'o mnie',
    'footer.fuel': ', na zbyt dużej ilości herbaty i monsterków',
    'footer.built': 'zrobione w',
    'theme.toggle': 'Przełącz tryb ciemny',
    'search.open': 'Szukaj',
    'search.placeholder': 'Szukaj…',
    'search.page': 'ta strona',
    'search.site': 'cały serwis',
    'search.empty': 'Brak wyników.',
    'search.hint': 'Enter otwiera · ↑↓ przechodzi · Ctrl+K zmienia zakres · Esc zamyka',
    'search.matches': 'trafień',
  },
} as const;

export type UIKey = keyof (typeof strings)['en'];

export function useTranslations(lang: Lang) {
  return (key: UIKey) => strings[lang][key] ?? strings[defaultLang][key];
}

export function langFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return (langs as string[]).includes(seg) ? (seg as Lang) : defaultLang;
}

/** Path without any language prefix, e.g. /pl/about/ -> /about/ */
export function stripLang(pathname: string) {
  return pathname.replace(/^\/(pl)(?=\/|$)/, '') || '/';
}

/** Prefix a site-relative path for the given language. */
export function localize(lang: Lang, path: string) {
  return lang === defaultLang ? path : `/${lang}${path}`;
}
