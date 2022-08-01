interface IAttandenceRepo {
  GetAll(): Promise<Attandance[]>
  Add(a: Attandance): Promise<void>
}
