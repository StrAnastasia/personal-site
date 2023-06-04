import Cookies from 'js-cookie';

const createCookiesHandler = <T extends string>() => {
  return {
    get(key: T) {
      return Cookies.get(key);
    },
    set(key: T, value: string) {
      Cookies.set(key, value);
    },
    remove(key: T) {
      Cookies.remove(key);
    },
  };
};

export enum Cookie {
  lang = 'lang',
}
export const cookies = createCookiesHandler<Cookie>();
