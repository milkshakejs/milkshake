@echo off
npm publish --access public
pause
cd toolkit
npm publish --access public
cd ../
