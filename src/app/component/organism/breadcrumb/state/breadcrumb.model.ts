import { guid, ID } from '@datorama/akita';

export interface Breadcrumb {
  id: ID;
  title: string;
  links: any[];
}

/**
 * A factory function that creates Breadcrumb
 */
export function createBreadcrumb({ title, links }: Partial<Breadcrumb>) {
  return {
    id: guid(),
    title,
    links: links || []
  } as Breadcrumb;
}
