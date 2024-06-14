
export type TSendData<T> = {
    message: string
    statusCode: number 
    success: boolean
    data: T
    accessToken?: string
}

export type TToken ={
    email: string
    role: string
}