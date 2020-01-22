const bulk_upsert = (model, rows) => {
  return Promise.all(rows.map(row => {
    if(model.findOne({where: {id: row.id}})) {
      return model.upsert(row)
    } else {
      return model.findOrCreate({
        where: row,
        defaults: row
      })
    }
  })).catch(err => console.error(err))
}

module.exports = {
  bulk_upsert
}