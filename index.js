"use strict";

const gitRawCommits = require("git-raw-commits");
const conventionalCommitsParser = require("conventional-commits-parser");
const through = require("through2");

module.exports = function promisedConventionalChangelog(
  gitRawCommitsOpts,
  parserOpts
) {
  return new Promise((resolve, reject) => {
    const commits = [];

    gitRawCommits(gitRawCommitsOpts)
      .pipe(conventionalCommitsParser(parserOpts))
      .on("data", function(data) {
        commits.push(data);
      })
      .on("end", function() {
        resolve(commits);
      })
      .on("error", function(error) {
        reject(error);
      });
  });
};
