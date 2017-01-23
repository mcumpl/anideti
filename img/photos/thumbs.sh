#!/bin/bash
FILES="$@"
for i in $FILES
do
echo "Prcoessing image $i ..."
convert $i -resize "160x160^" -gravity center -crop 160x160+0+0 +repage t$i
done