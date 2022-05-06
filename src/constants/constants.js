export const baseUrl = `http://api-qa.salesroom.in`;

// login Controller api
export const loginUrl = `http://api-qa.salesroom.in/v1/login`;
export const verifyUserUrl = `http://api-qa.salesroom.in/v1/login/templates/send`;
export const verifyOtpUrl = `http://api-qa.salesroom.in/v1/login/templates/verify`;

// business controller api
export const businessCreateAndUpdateUrl = `http://api-qa.salesroom.in/v1/business`;
export const getBusinessUrl = `http://api-qa.salesroom.in/v1/business/businessId`;

// dashboard controller api
export const getAllProducts = `v1/dashboard/categories/{categoryId}/products`;
export const getAllDashboardProductsApi = `v1/dashboard/search`;

// document controller api
export const doucmentDownloadApi = `http://api-qa.salesroom.in/v1/documents/download`;
export const doucmentUploadApi = `http://api-qa.salesroom.in/v1/documents/upload`;
export const doucmentViewApi = `http://api-qa.salesroom.in/v1/documents/view`;
