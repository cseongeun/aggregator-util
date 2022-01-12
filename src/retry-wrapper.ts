/**
 * 노드 데이터 요청 재시도
 * @param promise 노드 데이터요청
 * @param maxRetry 최대 재시도 횟수
 * @param retry 현재 시도 횟수
 * @returns 결과
 */
export function retryWrap(promise: any, maxRetry = 2, retry = 0) {
  return promise.then(
    (data) => {
      return data;
    },
    (err) => {
      if (retry < maxRetry) {
        retryWrap(promise, maxRetry, (retry += 1));
      }

      throw Error(err);
    },
  );
}
