module.exports = {
  getAll(md, options = {}) {
    return (req, res) => {
      md.find(options, (err, value) => {
        if (err) return res.status(400).send(err)
        return res.send(value)
      })
    }
  },
  getOne(md, options = {}) {
    return (req, res) => {
      md.findOne(options, (err, value) => {
        if (err) return res.status(400).send(err)
        return res.send(value)
      })
    }
  },
  getById(md, id, options = {}) {
    return (req, res) => {
      id = req.params.id
      md.findById(id, options, (err, value) => {
        if (err) return res.status(400).send(err)
        return res.send(value)
      })
    }
  },
  create(md) {
    return (req, res) => {
      const { body } = req
      md.create(body, (err, value) => {
        if (err) res.status(400).send(err)
        return res.send(value)
      })
    }
  },
  update(md, options = {}) {
    return (req, res) => {
      const { body, params } = req
      md.updateOne({ _id: params.id }, body, options, (err, value) => {
        if (err) return res.status(400).send(err)
        if (value.n === 0) return res.send('ID not found')
        return res.send(value)
      })
    }
  },
  drop(md) {
    return (req, res) => {
      md.deleteOne({ _id: req.params.id }, err => {
        if (err) return res.send(err)
        return res.send({ message: 'Delete success' })
      })
    }
  },
}
