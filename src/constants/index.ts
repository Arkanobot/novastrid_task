//status messages for api responses
export const status = {
  200: "success",
  400: "bad request",
  401: "unauthorized",
  403: "forbidden",
  404: "not found",
  409: "conflict",
  500: "internal server error",
};

//universal messages for api responses
export const universalMessages = {
  dataNotFound: "Data not found",
  serverError: "Internal server error. Please try again later.",
  missingFields: "Please provide all required fields",
  serverLive: "Server is live",
  invalidJSON: "Invalid JSON format",
  success: "Data fetch successful",
};

//login specific messages for api responses
export const loginMessages = {
  success: "Login successful",
  invalid: "Invalid login credentials. Please try again.",
};

//registered user api specific messages for api responses
export const registeredRouteMessages = {
  authorizationMissing: "Authorization Header is missing",
  tokenMissing: "Token is missing",
  invalidToken: "Invalid token. Please try again.",
  userNotFound: "Invalid User. Please try again.",
  notAuthorized: "Unauthorized. Please try again with proper permissions.",
};

//dashboard api specific messages for api responses
export const dashboardMessages = {
  userNotFound: "User not found. Please try again.",
};
