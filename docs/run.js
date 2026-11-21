import { registry } from '75lb-templates'
import Template from 'dcdoc-template'
import IoRead from '@dcdoc/model/io-read'
import IoWrite from '@dcdoc/model/io-write'
import PlainJsBlockMatcher from 'dcdoc-parse/matcher/block/js/plain.js'
import PlainSymbolBlock from 'dcdoc-parse/block/js/plain-symbol.js'
import QuickTable from 'dcdoc-parse/process/quick-table.js'

const ioRead = new IoRead()
const inputSources = await ioRead.execute(['index.js', './docs/readme.template'])

class ReadMe extends Template {
  t = registry
  content = inputSources[1].content
}

const blockStrings = inputSources[0].extractBlockStrings(new PlainJsBlockMatcher())
const blocks = blockStrings.map(blockString => new PlainSymbolBlock(blockString, inputSources[0]))
const quickTable = new QuickTable()
quickTable.execute(blocks)
const readMe = new ReadMe()
readMe.data = blocks.map(b => b.content.text).join('\n\n')
const ioWrite = new IoWrite()
await ioWrite.execute([ { url: 'readme.md', content: readMe.toString() }])
