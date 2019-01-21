@echo off
cd %1
node bump.js
git add .
git commit -m "Release - Unstable"
git push origin master
npm publish --access public
