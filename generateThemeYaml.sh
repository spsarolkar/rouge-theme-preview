#!/usr/bin/env bash

themes=$( rougify help style | awk '/available\sthemes/{getline; print}' | sed 's/\s//g'| sed 's/,/ /g' )
#echo "{$themesArray}"

themesArray=($themes)

> themes.yaml

for i in "${themesArray[@]}" 
do
	echo "- ${i}" >> _data/themes.yaml;
	$(rougify style ${i} > css/syntax-${i}.css)
done
