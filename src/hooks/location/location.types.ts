export type Cords = {
  latitude: number;
  longitude: number;
};
export interface Location {
  getCurrentLocation(): Promise<Cords>;
}
