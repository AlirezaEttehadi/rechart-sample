const removeTrailingSlashURL = (baseURL: string): string =>
  baseURL.replace(/\/+$/, "");

const removeLeadingSlashURL = (basePath: string): string =>
  basePath.replace(/^\/+/, "");

export const createAbsoluteURL = (baseURL: string, basePath: string): string =>
  removeTrailingSlashURL(baseURL) + "/" + removeLeadingSlashURL(basePath);
