#!/bin/bash
# This script assembles the seprate files into the larger opinionatedeng.md file
# in the folder below, this is done so multiple editors can be open simultainously
# in split viwe, makes changes easier to track, and makes the in-dev rendering much
# easier, since rendering a super large md file in realtime is slow

# I'm bad at bash scripting and if it works it's good enough for me. Don't judge
# this solution awkwardly needs some trailing newlines at the end of each file

# merge prefix files
cat p?-* > x1.md
wait
sleep 1
echo "prefix done"
# merge chapter files, done in groups of 10 because 10 before 1 lexiograhpically
cat ?-* > x2.md
sleep 1
wait
cat 1?-* >> x2.md
sleep 1
wait
cat 2?-* >> x2.md
sleep 1
wait
cat 3?-* >> x2.md
echo "chapters done"
# merge appendix files
cat a?-* > x3.md
sleep 1
wait
echo "appendix done"
# merge prefix, chapter, and appendix
cat x1.md x2.md x3.md > y.md
wait
echo "merged, removing temp files"
rm x?.md
echo "removed temp files"
# fix image paths (replace ../imgs/ with ./imgs/ )
sed 's/.\/imgs\//..\/imgs\//g' y.md > indev.md
echo "indev file generated"
mv y.md ../opinionatedeng.md
echo "opininionatedeng.md replaced"
