import { CmsException, HttpStatus } from "./cms-exception";

interface ContentfulErrorDetail {
  name: string;
  value: string;
}

interface ContentfulErrorDetails {
  errors: ContentfulErrorDetail[];
}

interface ContentfulError {
  status: number;
  statusText: string;
  message: string;
  details: ContentfulErrorDetails;
}

export class ContentfulException extends CmsException {
  constructor(status: HttpStatus, message?: string, error?: any) {
    const errors: string[] = [];
    if (error && error.message) {
      const ctError = JSON.parse(error.message) as ContentfulError;
      if (ctError.details && Array.isArray(ctError.details.errors)) {
        errors.push(
          ...ctError.details.errors.map((err) => `${err.name}: ${err.value}`)
        );
      } else if (!!message) {
        errors.push(message);
      }
    }

    super(status, errors, message);
  }
}
