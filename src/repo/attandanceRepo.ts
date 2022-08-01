import { Attandance } from '../domain/model';

export interface IAttandenceRepo {
  GetAll(): Promise<Attandance[]>
  Add(a: Attandance): Promise<void>
}
