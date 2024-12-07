/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type TypeOfMode = number;

//// 模式，使用二进制选中，方便多选

//// 没有模式，render时
export const NoMode = /*                         */ 0b000000;
// TODO: Remove ConcurrentMode by reading from the root tag instead

//// concurrent模式
export const ConcurrentMode = /*                 */ 0b000001;

//// 性能分析模式
export const ProfileMode = /*                    */ 0b000010;

//// 调试模式
export const DebugTracingMode = /*               */ 0b000100;

//// 旧代码严格模式
export const StrictLegacyMode = /*               */ 0b001000;

//// effect严格模式
export const StrictEffectsMode = /*              */ 0b010000;

//// 仅用于内部同步，更新模式
export const ConcurrentUpdatesByDefaultMode = /* */ 0b100000;
