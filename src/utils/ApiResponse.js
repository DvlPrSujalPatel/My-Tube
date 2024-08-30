class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode; // HTTP status code (e.g., 200, 400)
    this.success = statusCode < 400; // Boolean indicating success
    this.data = data; // The actual response data
    this.message = message; // Response message
  }
}

export { ApiResponse };
