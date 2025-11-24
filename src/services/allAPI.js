import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"


// guest api
// register api- called by auth component when register btn clicked,content type-"application/json"

export const registerAPI = async (reqBody) => {
  return await commonAPI('POST', `${SERVERURL}/register`, reqBody)
}

// login api

export const loginAPI = async (reqBody) => {
  return await commonAPI('POST', `${SERVERURL}/login`, reqBody)
}

// google-login api

export const googleLoginAPI = async (reqBody) => {
  return await commonAPI('POST', `${SERVERURL}/google-login`, reqBody)
}

// home page books api-called by home 

export const getHomeBooksAPI = async () => {
  return await commonAPI("GET", `${SERVERURL}/home-books`)
}

// all career api
// authorised user api - user

// view all books - called allbooks when page load
export const getAllBooksAPI = async (search, reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/all-books?search=${search}`, {}, reqHeader)
}

// view single book-called by view component
export const getSingleBookAPI = async (bookId, reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/books/${bookId}/view`, {}, reqHeader)
}


// upload book-called by profile component

export const addBookAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${SERVERURL}/add-book`, reqBody, reqHeader)
}

// ALL USER UPLOAD books
export const getAllUserUploadBooksAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/user-books`, {}, reqHeader)
}

// all user purchased book
export const getAllUserPurchasedBooksAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/user-bought-books`, {}, reqHeader)
}

// remove user upload books
export const removeUserUploadBookAPI = async (bookId, reqHeader) => {
  return await commonAPI("DELETE", `${SERVERURL}/user-books/${bookId}/remove`, {}, reqHeader)
}

// user profile update
export const updateUserProfileAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/user-profile/edit`,reqBody,reqHeader)
}


// purchased  book

// all job api
export const getAllJobAPI = async (searchKey) => {
  return await commonAPI("GET", `${SERVERURL}/all-jobs?search=${searchKey}`)
}

// add application - called by career user component
export const addApplicationAPI = async (reqBody,reqHeader) =>{
  return await commonAPI("POST",`${SERVERURL}/application/add`,reqBody,reqHeader)
}

//make-payment
export const makePaymentAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST", `${SERVERURL}/make-payment`, reqBody,reqHeader)
}


// authorised user api - admin------------------------------

// add job
export const addJobAPI = async (reqBody, reqHeader) => {
  return await commonAPI("POST", `${SERVERURL}/add-job`, reqBody, reqHeader)
}

// delete job
export const removeJobAPI = async (jobId, reqHeader) => {
  return await commonAPI("DELETE", `${SERVERURL}/job/${jobId}/remove`, {}, reqHeader)
}

// update admin
export const updateAdminProfileAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/admin-profile/edit`,reqBody,reqHeader)
}

// list books
export const listAllBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/admin-all-books`,{},reqHeader)
}

// list users - called by admin collection compoennt
export const getAllUsersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVERURL}/all-user`,{},reqHeader)
}

// approve books - called by admin collection compoennt when approve btn click
export const updateBookStatusAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVERURL}/admin/book/approve`,reqBody,reqHeader)
}

// list application - called by admin career component
export const getAllApplicationAPI = async (reqHeader) => {
  return await commonAPI("GET", `${SERVERURL}/all-applications`, {}, reqHeader)
}



