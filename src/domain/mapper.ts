import * as model from './model';
import * as dto from './dto';

export class AttandacneMapper {
  static impl = new this();

  toDto(m: model.Attandance): dto.Attandance {
    return { type: m.type, date: m.date.toISOString() };
  }

  toModel(d: dto.Attandance): model.Attandance {
    return { type: d.type, date: new Date(Date.parse(d.date)) };
  }
}
