import { Injectable } from '@angular/core';
import { persons } from '../interfaces/question';

@Injectable()
export class ShareDataService {
  constructor() {}

  persons: persons[] = [];
}
