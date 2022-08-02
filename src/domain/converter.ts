import * as model from './model';
import * as dto from './dto';

interface Converter<Model, Dto> {
  toDto(m: Model): Dto;
  toModel(d: Dto): Model;
}

export class DateConverter implements Converter<Date, string> {
  static impl = new this();

  toDto(m: Date): string {
    return m.toISOString();
  }

  toModel(d: string): Date {
    return new Date(Date.parse(d));
  }
}

export class AttandanceTypeConverter implements Converter<model.AttandanceType, dto.AttandanceType> {
  static impl = new this();

  toDto(m: model.AttandanceType): dto.AttandanceType {
    return m;
  }

  toModel(d: dto.AttandanceType): model.AttandanceType {
    return d;
  }
}

export class AttandacneConverter implements Converter<model.Attandance, dto.Attandance> {
  static impl = new this();

  toDto(m: model.Attandance): dto.Attandance {
    return {
      type: AttandanceTypeConverter.impl.toDto(m.type),
      date: DateConverter.impl.toDto(m.date)
    };
  }

  toModel(d: dto.Attandance): model.Attandance {
    return {
      type: AttandanceTypeConverter.impl.toModel(d.type),
      date: DateConverter.impl.toModel(d.date)
    };
  }
}