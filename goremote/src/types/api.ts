export type APIGeneralResponse<TData> = {
  success: boolean;
  message: string;
  data?: TData;
  errors?: Record<string, any>;
}

export type FormErrors<T> = {
  [K in keyof T]?: string;
};

