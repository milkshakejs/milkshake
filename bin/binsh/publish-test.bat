@echo off
node bump.js
git add .
git commit -m "Testing - Working"
git push origin master
npm publish --access public
