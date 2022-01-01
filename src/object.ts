import * as _ from 'lodash';

export function get(object: any, path: string) {
  return _.get(object, path);
}
