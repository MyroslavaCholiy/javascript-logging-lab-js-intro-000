const expect = require('expect')
const fs = require('fs')
const jsdom = require(jsdom)
const path = require(path)


describe('index', ()=>{

})
it('callas console error()',()=>{

})

jsdom({
  src:
  fc.readFileSync(path.resolve(__dirname,'..','index.js','utf-8'))
})
