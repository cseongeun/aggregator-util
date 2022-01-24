import * as _ from 'lodash';

/**
 * 객체에서 값 가져오기
 * @param object Object
 * @param path 경로
 * @returns 값
 */
export function get(object: any, path: string) {
  return _.get(object, path);
}
