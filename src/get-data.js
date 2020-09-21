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
  if (Array.isArray(data[table][0]))
    return data[table][0].sort((a, b) => {
      if (a.fields && a.fields.Order) {
        return parseInt(a.fields.Order) - parseInt(b.fields.Order);
      }
      return 0;
    });
  return data[table][0] ?? "";
};
