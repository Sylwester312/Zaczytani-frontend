import { LoginRequest } from '../interfaces/login';
import {
  ChangePasswordPost,
  ConfirmEmailPost,
  ForgotPasswordEmail,
  RegisterPost,
  ResendEmail,
  ResetPassword,
  UserProfileDetails,
} from '../interfaces/user';
import apiClient from './config/axios';
import endpoints from './config/endpoints';

const userApi = {
  login: async (payload: LoginRequest) => {
    const response = await apiClient.post(endpoints.user.login, { email: payload.login, password: payload.password });
    return response;
  },
  refreshToken: async (refreshToken: string) => await apiClient.post(endpoints.user.refreshToken, { refreshToken }),
  getDetails: async (): Promise<UserProfileDetails> => {
    const response = await apiClient.get<UserProfileDetails>(endpoints.user.fetchDetails);
    return response.data;
  },
  changePassword: async (payload: ChangePasswordPost) => {
    const response = await apiClient.post(endpoints.user.changePassword, payload);
    return response;
  },
  register: async (payload: RegisterPost) => {
    const response = await apiClient.post(endpoints.user.register, payload);
    return response;
  },
  resendEmail: async (payload: ResendEmail) => {
    const response = await apiClient.post(endpoints.user.resendEmail, payload);
    return response;
  },
  confirmEmail: async (payload: ConfirmEmailPost) => {
    const response = await apiClient.get(endpoints.user.confirmEmail, {
      params: { userId: payload.userId, code: payload.code },
    });
    return response;
  },
  forgotPassword: async (payload: ForgotPasswordEmail) => {
    const response = await apiClient.post(endpoints.user.forgotPassword, payload);
    return response;
  },
  resetPassword: async (payload: ResetPassword) => {
    const response = await apiClient.post(endpoints.user.resetPassword, payload);
    return response;
  },
};

export default userApi;
