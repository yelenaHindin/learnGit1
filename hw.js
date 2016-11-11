#!/usr/bin/env node
console.log("Hello, world!");

var a = [5, 8,, 12];

for (var l in a)
    console.log(l, ",", a[l]);


for (var l = 0; l < a.length; l++)
    console.log(l, ",", a[l]);

