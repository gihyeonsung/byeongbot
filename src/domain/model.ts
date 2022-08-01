import { IDto } from './dto';

export type AttandanceType =
  | 'in'
  | 'out'

export interface Attandance {
  type: AttandanceType
  date: Date
}

