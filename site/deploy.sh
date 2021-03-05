# Copy documents to docs/
cp ../README.md docs/
cp ../README_zh.md docs/
cp -r ../docs/* docs/
# Build the web pages
npm install
npm run docs:build
# Remove the copied documents
rm -rf docs/*
# Copy the web pages to the root
cd ..
cp -r site/docs/.vuepress/dist/* ./
# Upload to GitHub
git add -A
git commit -m "Update GitHub Pages"
git push origin master:gh-pages

