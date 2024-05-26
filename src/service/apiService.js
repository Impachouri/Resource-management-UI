import apiInstance from "./axios.config";

const fetchDataApi = async () => {
  const response = await apiInstance.get("/resource.json");
  return response;
};

const addItemApi = async (formData) => {
  return apiInstance.post("/add_resource.json", formData);
};

export { fetchDataApi, addItemApi };
