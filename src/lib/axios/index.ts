import axios from 'axios';

export class AxiosService {
  private static axiosInstance = axios.create({
    baseURL: 'http://192.168.0.54:3000/',
  });

  static async get(url: string, config = {}) {
    try {
      const response = await this.axiosInstance.get(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  static async post(url: string, data: unknown, config = {}) {
    try {
      const response = await this.axiosInstance.post(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  static handleError(error: unknown) {
    throw error;
  }
}
