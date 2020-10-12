// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const dataFolder = './src/data'
const files = fs.readdirSync(dataFolder);
const content = files.map(file => {
  const filePath = path.join(dataFolder, file);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const items = yaml.safeLoad(fileContents);

  const typeName = path.parse(file)
                       .name
                       .split('-')
                       .map(s => {
                         return s.charAt(0).toUpperCase() + s.slice(1) 
                       })
                       .join('');

  return {
    typeName: typeName,
    items: items,
  }
});

module.exports = function (api) {
  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    for (const obj of content) {
      const collection = actions.addCollection({
        typeName: obj.typeName
      })

      for (const item of obj.items) {
        collection.addNode(item);
      }
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
