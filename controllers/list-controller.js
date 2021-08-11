const listService = require("../services/list-service");

class ListController {
  async getlist(req, res, next) {
    try {
      const data = await listService.getList();

      return res.json(data);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new ListController();
