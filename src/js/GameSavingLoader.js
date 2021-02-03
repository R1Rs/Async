import read from './Reader';
import json from './Parser';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      return json(data);
    } catch (e) {
      return e;
    }
  }
}
