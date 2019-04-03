import { ID } from '@datorama/akita';

export interface Index {
  id: ID;
}

/**
 * A factory function that creates Index
 */
export function createIndex(params: Partial<Index>) {
  return {

  } as Index;
}
