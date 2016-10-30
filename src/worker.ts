import {IWorker} from './interfaces';

export class Worker implements IWorker {
  constructor(private _test : string) {}

  public get test() {
    return this._test;
  }

  public calculateTest() {
    return 'bla';
  }

  public calculateTest2() {
    return 'bla2';
  }
}
