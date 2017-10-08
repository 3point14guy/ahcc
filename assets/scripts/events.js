'use strict'

function externalLinks () {
  for (let c = document.getElementsByTagName('a'), a = 0; a < c.length; a++) {
    const b = c[a]; b.getAttribute('href') && b.hostname !== location.hostname && (b.target = '_blank')
  }
}
externalLinks()
