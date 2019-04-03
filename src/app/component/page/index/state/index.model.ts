import { ID } from '@datorama/akita';

export interface Index {
  id: ID;
  userId: number;
  title: string;
  body: string;
}

/**
 * A factory function that creates Index
 */
export function createIndex(params: Partial<Index>): Index {
  return {
    id: params.id,
    userId: params.userId,
    title: params.title,
    body: params.body
  };
}
