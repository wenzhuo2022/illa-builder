export interface RegisterFields {
  nickname: string
  email: string
  verificationCode: string
  password: string
  isSubscribed: boolean
}

export interface RegisterResult {
  userId: string
  nickname: string
  email: string
  createdAt: string
}
