import { IAttandenceRepo } from '../repo/attandanceRepo';

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
    throw new Error('not implemented yet');
  }
}
