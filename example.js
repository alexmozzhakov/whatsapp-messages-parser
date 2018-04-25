
// Example: write data to json file
const optionDefinitions = [
  {
    name: 'source',
    alias: 's',
    typeLabel: '[underline]{file}',
    description: 'Exported file'
  },
  {
    name: 'output',
    alias: 'o', 
    typeLabel: '[underline]{file}',
    description: 'Output file'
  }
]

const getUsage = require('command-line-usage')

const sections = [
  {
    header: 'WhatsApp Parser',
    content: 'Generates [italic]{JSON} from WhatsApp [italic]{.txt} files.'
  },
  {
    header: 'Options',
    optionList: optionDefinitions 
  }
]
const usage = getUsage(sections)
const commandLineArgs = require('command-line-args')
const options = commandLineArgs(optionDefinitions)

var fs = require('fs');
var whatsappMessagesParser = require('./');
if (options['source'] == undefined || options['output'] == undefined) {
console.log(usage)}
else {
whatsappMessagesParser(options['source'], function(messages, err){
  if (err) return console.log(err);

  // write to json file
  fs.writeFile(options['output'], JSON.stringify(messages, null, 2), function (err, data) {
    if (err) return console.log(err);
    console.log('File saved');
  });

});}
