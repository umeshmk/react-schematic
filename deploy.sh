#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo "Deploying....."
echo "https://umeshmk.github.io/react-schematic/" 
echo "https://umeshmk.github.io/react-schematic/" > CNAME

git init
git add -A
git commit -m "deploy" &&

git push -f git@github.com:umeshmk/react-schematic.git master:gh-pages

cd -