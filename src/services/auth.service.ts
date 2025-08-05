import { AxiosService } from '@/lib/axios';
import { UserResponse } from '@/types/user';

export const login = async (pin: string): Promise<UserResponse> => {
  return AxiosService.post('user', { pin });
};
