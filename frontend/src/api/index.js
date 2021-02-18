import axios from "axios";

const adminapi = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const createNotice = (payload) => adminapi.post(`/addpost`, payload);
export const getAllNotices = () => adminapi.get(`/timeline`);
export const updateNoticeById = (id, payload) =>
adminapi.put(`/updatepost/${id}`, payload);
export const deleteNoticeById = (id) => adminapi.delete(`/deletepost/${id}`);
export const getNoticeById = (id) => adminapi.get(`/timeline/${id}`);

const adminapis = {
  createNotice,
  getAllNotices,
  updateNoticeById,
  deleteNoticeById,
  getNoticeById,
};

export default adminapis;
