@echo off
git add .
git commit -m "Release - Testing"
git push origin master
npm publish --access public
