var seneca = require('seneca')()

seneca.use('sales-tax-plugin', { country: 'IE', rate: 0.23 })
seneca.use('sales-tax-plugin', { country: 'UK', rate: 0.20 })

seneca.ready(function (err) {
  if (err) return process.exit(!console.error(err))

  console.log("Seneca is ready")

  seneca.act({ role: 'shop', cmd: 'salestax', country: 'IE', net: 100 }, function (err, result) {
    if (err) console.error(err)
    else console.log("IE Tax Result:", result)
  })
  
  seneca.act({ role: 'shop', cmd: 'salestax', country: 'UK', net: 200 }, function (err, result) {
    if (err) console.error(err)
    else console.log("UK Tax Result:", result)
  })
  
  seneca.act({ role: 'shop', cmd: 'salestax', country: 'UK', net: 300 }, function (err, result) {
    if (err) console.error(err)
    else console.log("UK Tax Result (2nd call):", result)
  })
})
