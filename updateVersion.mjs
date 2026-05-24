import pJson from './package.json' assert { type: 'json' };
import fs from 'fs/promises'

console.log('Current Version: ', pJson.version)

const splittedVersion = pJson.version.split('.')
splittedVersion[splittedVersion.length-1] = +splittedVersion[splittedVersion.length-1] + 1

let newPackageJson = structuredClone(pJson)
newPackageJson.version = splittedVersion.join('.')

console.log('New Version: ', newPackageJson.version)

console.log('Updating package.json')
await fs.writeFile('package.json', JSON.stringify(newPackageJson, null, "\t"), 'utf-8')
console.log('Done updating version on package.json')