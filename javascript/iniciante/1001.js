// https://www.urionlinejudge.com.br/judge/pt/problems/view/1001

var input = `-10
4`;

// VSCODE: readFileSync() comentado
// URI ONLINE: readFileSync() descomentado
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
   
console.log('X = ' + (a+b));