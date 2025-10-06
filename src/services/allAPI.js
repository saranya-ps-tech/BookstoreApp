import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"


// guest api
// register api- called by auth component when register btn clicked,content type-"application/json"

export const registerAPI=async(reqBody)=>{
 return await  commonAPI('POST',`${SERVERURL}/register`,reqBody)
}

// login api
// home page books api
// all career api
// authorised user api - user
// view all books
// view single book
// upload book
// profile update
// purchased  book
// approve books
// authorised user api - admin
// add career
// update admin
// list books
// list users
// approvre books
