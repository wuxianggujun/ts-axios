export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}

export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'Options'
  | 'post'
  | 'Post'
  | 'put'
  | 'Put'
  | 'patch'
  | 'Patch'
