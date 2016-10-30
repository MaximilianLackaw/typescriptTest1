import {IWorker} from './interfaces';
import {Worker} from './worker';

export class WorkerFactory {
  public getWorker(id : number) : IWorker {
    return new Worker('bla');
  }
}

