const data = require("../data.json");

module.exports = (table, term) => {
  if (term)
    return (
      data[table][0].find((row) => {
        return row.fields?.key === term;
      })?.fields?.Content ?? ""
    );
  return data[table] ?? "";
};
