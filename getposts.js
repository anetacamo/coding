const path = require('path');
const fs = require('fs');

const dirPath = path.join(__dirname, '../src/content');
let postlist = [];

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log('Failed to list contents of directory: ' + err);
    }

    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, 'utf8', (err, contents) => {
        /* only metadata */
        /* here we remove first --- of frontmatter */
        let meta = contents.substring(4);
        /* here we cut off everything beggining with ending --- of frontmatter */
        let metadata = meta.substring(0, meta.indexOf('---') - 1);

        /* only text*/
        /* remove everything BEFORE --- */
        let text = meta.substring(meta.indexOf('---') + 5);

        /* md made into an object */
        let lines = metadata.split('\n');
        lines.forEach(
          (line) => (obj[line.split(': ')[0]] = line.split(': ')[1])
        );
        obj['text'] = text;

        postlist.push(obj);
        if (postlist.length === files.length) {
          let data = JSON.stringify(postlist);
          fs.writeFileSync('src/posts.json', data);
        }
      });
    });
  });
  return;
};
getPosts();
