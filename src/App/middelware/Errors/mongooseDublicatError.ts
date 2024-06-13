import { TErrorRespons, TErrorSource } from "./error.interface";


const DublicatErrorHandler = (err:any):TErrorRespons =>{
    const match = err.message.match(/"([^"]*)"/)
    const extractedValue = match && match[1]
    const errorSource:TErrorSource = [{
        path: "",
        message: `${extractedValue} is already exists`
    }]

    return {
        statusCode: 400,
        message: "Validation error",
        errorSource,
      };
}
export default DublicatErrorHandler