const data = require("../data.json");
const snarkdown = require("snarkdown");

module.exports = (table, term) => {
  if (term)
    return snarkdown(
      (
        (
          data[table][0].find((row) => {
            return (row.fields || {}).key === term;
          }) || {}
        ).fields || {}
      ).Content ?? ""
    ).replace(/<br \/>/g, "<br><br>");
  return data[table][0] ?? "";
};
