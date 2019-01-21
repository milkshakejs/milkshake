@echo off
node bump.js
git add package.json
git commit -m "Testing"
git push origin master
npm publish --access public
