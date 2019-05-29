import { User } from 'src/app/model/user.model';

export interface UserDetail extends User {}

/**
 * A factory function that creates UserDetail
 */
export function createUserDetail(params: Partial<UserDetail>) {
  return {} as UserDetail;
}
