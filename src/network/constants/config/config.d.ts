declare module 'react-native-config' {
  export interface Env {
    API_URL?: string;
    API_KEY?: string;
  }

  export const Config: Env;
  export default Config;
}
