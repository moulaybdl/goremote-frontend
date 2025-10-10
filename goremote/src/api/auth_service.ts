import { RegisterRequest, RegisterResponse } from "@/types/auth";
import { BaseApi } from "./base";
import { RegisterCompanyResponse } from "@/types/company";
import { RegisterFreelancerResponse } from "@/types/freelancer";

export class AuthService extends BaseApi {
  static async register(
    data: RegisterRequest
  ): Promise<RegisterCompanyResponse | RegisterFreelancerResponse | undefined> {
    const base = "/auth";

    const request_url = `${this.url}${base}/register`;
    const response = await this.post<RegisterResponse>(request_url, data, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    // handle errors
    if (response === undefined) {
      return undefined
    }

    // return respons:
    return response.data
  }



}
