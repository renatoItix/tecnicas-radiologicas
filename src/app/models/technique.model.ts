export interface TechniqueModel {
  id: string;
  name: string;
  category: string;
  kV: number;
  mAs: number;
  mA: number;
  distance: number;
  fullName?: string;
}