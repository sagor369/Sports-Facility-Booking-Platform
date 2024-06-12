
export type TSendData<T> = {
    message: string
    statusCode: number 
    success: boolean
    data: T
}