@echo off
node bump.js
git push origin master
npm publish --access public
