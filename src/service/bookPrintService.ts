import { IAttandenceRepo } from '../repo/attandanceRepo';

const isHoliday = (d: Date): boolean => {
  const holidays = [
    '2022-01-01',
    '2022-01-31',
    '2022-02-01',
    '2022-02-02',
    '2022-03-01',
    '2022-03-09',
    '2022-05-05',
    '2022-05-08',
    '2022-06-01',
    '2022-06-06',
    '2022-08-15',
    '2022-09-09',
    '2022-09-10',
    '2022-09-11',
    '2022-09-12',
    '2022-10-03',
    '2022-10-09',
    '2022-10-10',
    '2022-12-25',
  ].map(s => new Date(s));

  const date = new Date(d.getTime()).setHours(0, 0, 0, 0);
  return holidays.map(h => h.setHours(0, 0, 0, 0)).includes(date);
};

interface IBookPrintService {
  Render(from: Date, to: Date): Promise<void>
}

export class BookPrintService implements IBookPrintService {
  constructor(private attandanceRepo: IAttandenceRepo) {
  }

  // 1. 리포에서 출석에서 기간에 맞는 출석 가져오기
  // 2. 해당 출석일중 휴일, 휴가를 제외한 근로일만 선택
  // 3. 매 일에 대해, 가장 이른 punch in - 가장 느린 out 선택
  //   1. in 있고 out 없는 경우, in 에서 9시간 뒤 out 기본값 수정
  //   2. in 없고 out 있는 경우, out 에서 9시간 전 in 기본값 수정
  // 4. 주어진 출석부 템플릿에 랜더 후 pdf 반환
  async Render(from: Date, to: Date): Promise<void> {
    const attandances = await this.attandanceRepo.GetAll();

    const ranged =
      attandances
        .filter(a => a.date.getTime() >= from.getTime())
        .filter(a => a.date.getTime() <= to.getTime())
        .sort((a, b) => a.date.getTime() - b.date.getTime());

    const withoutHolidays = ranged.filter(a => !isHoliday(a.date));

    console.log(withoutHolidays);

    throw new Error('not implemented yet');
  }
}
