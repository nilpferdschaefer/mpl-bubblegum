/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@metaplex-foundation/umi';

export type PathNode = { node: Uint8Array; index: number };

export type PathNodeArgs = PathNode;

export function getPathNodeSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<PathNodeArgs, PathNode> {
  const s = context.serializer;
  return s.struct<PathNode>(
    [
      ['node', s.bytes({ size: 32 })],
      ['index', s.u32()],
    ],
    { description: 'PathNode' }
  ) as Serializer<PathNodeArgs, PathNode>;
}