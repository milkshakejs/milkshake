@echo off
node bump.js
npm publish --access public
cd ../
