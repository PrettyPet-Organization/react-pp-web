import axios from "@plugins/axios";

export default {
  async getTodos() {
     const { data } = await axios.get("/todos");

    return data;
  },
};
