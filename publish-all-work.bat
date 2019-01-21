@echo off
node bump.js
git add -A
git commit -m "Application - Working"
git push origin master
npm publish --access public
