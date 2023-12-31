const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      return await fn(req, res, next);
    } catch (error) {
      console.log(error);
      res.status(error.code || 500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

export default asyncHandler;
