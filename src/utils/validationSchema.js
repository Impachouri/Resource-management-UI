import * as Yup from "yup";

export const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  icon_url: Yup.string().url("Invalid URL").required("Icon URL is required"),
  link: Yup.string().url("Invalid URL").required("Link is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
  tag: Yup.string()
    .oneOf(["user", "request"], 'Tag must be either "user" or "request"')
    .required("Tag is required"),
});
