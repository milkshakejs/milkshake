@echo off
cd %1
node bump.js
git add .
git commit -m "Release - Testing"
git push origin master
npm publish --access public