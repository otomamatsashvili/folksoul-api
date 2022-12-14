import { Request, Response, NextFunction } from 'express'

const errorHandler = (
  error: any,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  if (!res.statusCode || res.statusCode === 200) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    })
  } else {
    res.json({
      status: 'fail',
      data: { message: error.message },
    })
  }
}

export default errorHandler
