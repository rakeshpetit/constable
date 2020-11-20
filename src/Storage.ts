import AsyncStorage from '@react-native-community/async-storage';

const STORAGE_SESSION_KEY = 'USER_SESSION';

class Storage {
  static getSession = async (): Promise<string | null> => {
    const sessionKey = await AsyncStorage.getItem(STORAGE_SESSION_KEY);

    if (sessionKey) {
      return JSON.parse(sessionKey);
    } else {
      return null;
    }
  };

  static setSession = (session: string): void => {
    AsyncStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(session));
  };

  static deleteSession = (): void => {
    AsyncStorage.removeItem(STORAGE_SESSION_KEY);
  };
}

export default Storage;
