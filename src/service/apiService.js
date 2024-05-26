import apiInstance from "./axios.config";

const fetchDataApi = async () => {
  const response = await apiInstance.get("resources.json");
  return response;
};

const addItemApi = async (formData) => {
  return apiInstance.get("add_resource.json", formData);
};

export { fetchDataApi, addItemApi };
