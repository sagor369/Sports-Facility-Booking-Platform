import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { TErrorSource } from "./error.interface";
import ZodErrors from "./ZodErrorHandler";
import ValidationError from "./mongooseValidationError";
import CastErrorhandler from "./mongooseCastError";
import DublicatErrorHandler from "./mongooseDublicatError";
import { AppError } from "./CustomError";

const GlobalError: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 404;
  let message= err?.message ||""
  let errorSources:TErrorSource  = [
    {
      path: "",
      message: "",
    },
  ];
  if(err instanceof ZodError){
    const simplefyError = ZodErrors(err)
    statusCode= simplefyError.statusCode
    errorSources = simplefyError.errorSource
    message= simplefyError.message

  }
  else if (err?.name === "ValidationError"){
    const simplefyError = ValidationError(err)
    statusCode= simplefyError.statusCode
    errorSources = simplefyError.errorSource
    message= simplefyError.message

  }
  else if (err?.name === "CastError"){
    const simplefyError = CastErrorhandler(err)
    statusCode= simplefyError.statusCode
    errorSources = simplefyError.errorSource
    message= simplefyError.message

  }
  else if (err?.code === 11000){
    const simplefyError = DublicatErrorHandler(err)
    statusCode= simplefyError.statusCode
    errorSources = simplefyError.errorSource
    message= simplefyError.message

  }
  else if (err instanceof AppError) {
    (statusCode = err?.statusCode),
      (message = err?.message),
      (errorSources = [
        {
          path: "",
          message: err?.message,
        },
      ]);
  } 
  else if (err === Error) {
    (message = err?.message),
      (errorSources = [
        {
          path: "",
          message: err?.message,
        },
      ]);
  }
  return res.status(statusCode).json({
    success: false,
    message: message,
    errorSources,
    stack: err.stack,
    err,
  });
};

export default GlobalError
