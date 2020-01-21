const path = require( 'path' );
const fs = require('fs')

const copiar = async () => {
  const result = await fs.copyFileSync('src', 'teste')
console.log(result)
}
copiar()

