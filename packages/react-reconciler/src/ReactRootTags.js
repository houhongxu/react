/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type RootTag = 0 | 1;

//// tag区分root模式

//// render渲染的
export const LegacyRoot = 0;

//// createroot渲染的
export const ConcurrentRoot = 1;
