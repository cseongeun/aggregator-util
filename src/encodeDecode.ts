import { ethers } from 'ethers';
import { isNullBytes } from './type';

/**
 * 함수 호출 데이터 암호화
 * @param abi abi
 * @param targetFunction 함수 명
 * @param params 함수 인자
 * @returns 암호화 데이터
 */
export function encodeFunction(
  abi: any,
  targetFunction: string,
  params?: any[],
): string {
  const iface: any = _generateIface(abi);
  return iface.encodeFunctionData(targetFunction, params);
}

/**
 * 함수 호출 데이터 복호화
 * @param abi abi
 * @param targetFunction 함수 명
 * @param data 암호화 데이터
 * @returns 함수 암호화 데이터 복호화
 */
export function decodeFunction(
  abi: any,
  targetFunction: string,
  data: string,
): string {
  const iface: any = _generateIface(abi);
  return iface.decodeFunctionData(targetFunction, data);
}

/**
 * 함수 호출 결과 데이터 복호화
 * @param abi abi
 * @param targetFunction 함수 명
 * @param data  암호화된 데이터
 * @returns 복호화 데이터
 */
export function decodeFunctionResultData(
  abi: any,
  targetFunction: string,
  data: string,
): any {
  const iface: any = _generateIface(abi);
  return iface.decodeFunctionResult(targetFunction, data);
}

/**
 * 로그 파싱
 * @param abi abi
 * @param data 로그 데이터
 * @returns 파싱된 로그 데이터
 */
export function parseLog(abi: any, data: string): any {
  const iface: any = _generateIface(abi);
  return iface.parseLog(data);
}

/**
 * 이벤트 토픽 암호화
 * @param abi abi
 * @param event 이벤트 명
 * @returns 이벤트 토픽 암호화 문자열
 */
export function encodeEventTopic(abi: any, event: string): string {
  const iface: any = _generateIface(abi);
  return iface.getEventTopic(event);
}

/**
 * 이벤트 암호화 with 필터
 * @param abi abi
 * @param event 이벤트 명
 * @param filter 이벤트 필터
 * @returns 이벤트 with 필터 암호화
 */
export function encodeEventFilterTopic(
  abi: any,
  event: string,
  filter: any[],
): any {
  const iface: any = _generateIface(abi);
  return iface.encodeFilterTopics(event, filter);
}

/**
 * 함수 호출 결과 유효성 검증
 * @param success 함수 호출 결과 성공 여부
 * @param data 함수 호출 결과 데이터
 * @returns 유효성 여부
 */
export function validResult(success: boolean, data: string): boolean {
  return success && !isNullBytes(data);
}

/**
 * 인터페이스 생성
 * @param abi abi
 * @returns 인터페이스
 */
function _generateIface(abi: any[]): any {
  return new ethers.utils.Interface(abi);
}
