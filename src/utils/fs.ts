import { readFile, writeFile } from "fs";

export const readFileJson = <Result>(path: string, jsonDefault?: Result): Promise<Result> => {
  return new Promise((resolve, reject) => {
    readFile(path, (e, data) => {
      if (e) {
        if (jsonDefault) {
          resolve(jsonDefault);
        } else {
          reject(e);
        }
        return
      }

      let json;
      try {
        json = JSON.parse(data.toString());
      } catch (e) {
        if (jsonDefault) {
          resolve(jsonDefault);
        } else {
          reject(e);
        }
        return;
      }

      resolve(json);
    })
  });
}

export const writeFileJson = (path: string, json: any): Promise<void> => {
  return new Promise((resolve) => {
    const output = JSON.stringify(json);
    writeFile(path, output, () => {
      resolve();
    })
  });
}
