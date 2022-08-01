export type AttandanceType =
  | 'in'
  | 'out'

export interface Attandance {
  type: AttandanceType
  date: number // unit = ms, base = unixtime, timezone = naive, use utc
}
