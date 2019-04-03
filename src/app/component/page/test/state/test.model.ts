import { ID } from '@datorama/akita';

export interface Test {
  id: ID;
}

/**
 * A factory function that creates Test
 */
export function createTest(params: Partial<Test>) {
  return {

  } as Test;
}
