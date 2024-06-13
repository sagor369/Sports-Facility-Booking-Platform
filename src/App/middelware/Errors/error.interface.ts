
export type TErrorRespons = {
    statusCode: number
    message: string
    errorSource:TErrorSource
}

export type TErrorSource = {
    path: string | number
    message: string 
}[]

