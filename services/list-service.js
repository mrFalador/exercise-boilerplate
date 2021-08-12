const unirest = require("unirest");
const ColorThief = require("colorthief");
const fs = require("fs");

class ListService {
  async getColor(url) {
    const dColor = ["Red", "Green", "Blue", "None"];

    const color = await ColorThief.getColor(url);

    let max = color[0];
    let maxIndex = 0;

    for (let i = 1; i < color.length; i++) {
      if (color[i] > max) {
        maxIndex = i;
        max = color[i]
      }
    }

    if ((color[0] === color[1]) & (color[1] === color[2])) {
      maxIndex = [3];
    }

    let primeColor = dColor[maxIndex];
    let dominanteColor = color;
    return { primeColor, dominanteColor };
  }

  async getList() {
    try {
      const data = await unirest.get(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11"
      );
      const json_arr = [];

      for (let i = 0; i < 120; i++) {
        const picture = await unirest.get(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${data.body.objectIDs[i]}`
        );
        const { objectID, primaryImageSmall } = picture.body;
        let list;
        if (primaryImageSmall) {
          const { primeColor, dominanteColor } = await this.getColor(
            primaryImageSmall
          );
          list = {
            id: objectID,
            imageUrl: primaryImageSmall,
            color: dominanteColor,
            primaryColor: primeColor,
          };
        } else {
          list = {
            id: objectID,
            imageUrl: "None",
            color: "None",
            primaryColor: "None",
          };
        }
        await json_arr.push(list);
        setTimeout(function timer(){}, 1000)
      }

      fs.writeFileSync("results.json", JSON.stringify([...json_arr]))
      return json_arr;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new ListService();
