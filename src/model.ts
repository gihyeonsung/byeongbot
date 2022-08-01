type AttandanceType =
  | 'in'
  | 'out'

interface Attandance {
  type: AttandanceType
  date: Date
}