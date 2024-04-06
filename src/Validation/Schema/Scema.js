import * as yup from 'yup'
import { phoneRegEx } from '../regx'

export const enrollSchema=yup.object({
    fullname:yup.string().required("Please enter your fullname").min(2),
    email:yup.string().email().required("Please enter a valid email"),
    phone:yup.string().matches(phoneRegEx,"Please enter a valid mobile no.").required("Please enter your mobile numbers"),
    message:yup.string().required("Please enter your message").min(2),
    course:yup.string().required("Please select a course"),
})