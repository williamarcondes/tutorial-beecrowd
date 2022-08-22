// https://www.urionlinejudge.com.br/judge/pt/problems/view/1004

// Altere a entrada para testar localmente
var input = `3
9`;

// VSCODE: readFileSync() comentado
// URI ONLINE: readFileSync() descomentado
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
prod = a * b;

console.log(`PROD = ${prod}`);