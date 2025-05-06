const httpCodes = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  FAILED_DEPENDENCY: 424,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
} as const;
export type HttpStatus = keyof typeof httpCodes;

const errorDefaultMessages: Record<HttpStatus, string> = {
  UNAUTHORIZED: "Unauthorized",
  BAD_REQUEST: "Bad Request",
  NOT_FOUND: "Not Found",
  CONFLICT: "Conflict",
  UNPROCESSABLE_ENTITY: "Unprocessable Entity",
  FAILED_DEPENDENCY: "Failed Dependency",
  INTERNAL_SERVER_ERROR: "Internal Server Error",
  NOT_IMPLEMENTED: "Not Implemented",
};

export class CmsException extends Error {
  code: number;
  type = "cms";
  errors: string[] = [];

  constructor(status: HttpStatus, errors: string[], message?: string) {
    super(message ?? errorDefaultMessages[status]);
    this.name = this.constructor.name;
    this.code = httpCodes[status];
    this.errors = errors;
  }
}
