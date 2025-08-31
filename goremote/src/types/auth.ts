import { APIGeneralResponse } from "./api";
import { RegisterCompanyResponse } from "./company";
import { RegisterFreelancerResponse } from "./freelancer";

export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export type RegisterRequest = {
  user_type: "client" | "freelancer";
  email: string;
  password: string;
  phone_number: string;

  // optional fields: depend on user type

  // freelancer
  first_name?: string;
  last_name?: string;
  gender?: "male" | "female";
  birthdate: string;

  // client
  company_name: string;
  industry: string;
};

export type RegisterResponse = APIGeneralResponse<
  RegisterFreelancerResponse | RegisterCompanyResponse
>;
