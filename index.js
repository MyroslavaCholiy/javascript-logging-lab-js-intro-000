const expect = require('expect')
const fs = require('fs')
const jsdom = require(jsdom)
const path = require(path)


describe('index', ()=>{
  const html = '<div></div>'
  const src = path.resolve(dirname, '..', 'index.js')
})
it('callas console error()', done =>{
  const spy = expect.spyOn(console, 'errer').andCallThrough()

  jsdom.env(html, [src], {
  virtualConsole: jsdom.createVirtualConsole().sendTo(console)
}, (err, window) => {
  expect(spy).toHaveBeenCalled('expected console.error to have been called')
  console.console.error.restore()
  done()
})
})
it('callsconsole.log()',done =>{
  const spy = expect.spyOn(console, 'log').andCallThrough()

  jsdom.env(html, [src], {
    virtualConsole: jsdom.createVirtualConsole().sendTo(console)
  }, (err,window) => {
    expect(spy)toHaveBeenCalled('expected console.warn to have been called')
    console.console.warn.restore()
    done()
  })
})
})
