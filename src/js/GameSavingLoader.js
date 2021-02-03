import read from './Reader';
import json from './Parser';

export default class GameSavingLoader {
  static load() {
    return read().then(json);
  }
}
