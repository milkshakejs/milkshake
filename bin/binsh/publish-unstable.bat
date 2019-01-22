@echo off
node bump.js
git add .
git commit -m "Release - Unstable"
git push origin master
npm publish --access public
