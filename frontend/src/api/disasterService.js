import API from "./api";

export const createDisaster = async (data) => {
  return await API.post("/disasters/create", data);
};

export const getDisasters = async () => {
  return await API.get("/disasters");
};