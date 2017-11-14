# promised-conventional-commits-parser

This is a promise wrapper around parts of the conventional changelog project.
It will give you the json representation given by [conventional-commits-parser][]
based on the commits read from [git-raw-commits][].

All the heavy lifting here is done by the cool project [conventional-changelog][],
you should check it out.

## Install

```
npm install promised-conventional-commits-parser
```

## Usage

```javascript
const parser = require('promised-conventional-commits-parser');

const gitRawOptions = {} // see git-raw-commits documentation
const parserOptions = {} // see conventional-commits-parser documentation

parser(gitRawOptions, parserOptions)
  .then(commits => {
    console.log(commits)
  })

```

[conventional-changelog]: https://github.com/conventional-changelog/conventional-changelog
[conventional-commits-parser]: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-commits-parser
[git-raw-commits]: https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/git-raw-commits
