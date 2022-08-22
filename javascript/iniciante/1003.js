// https://www.urionlinejudge.com.br/judge/pt/problems/view/1003

// Altere a entrada para testar localmente
var input = `30
10`;

// VSCODE: readFileSync() comentado
// URI ONLINE: readFileSync() descomentado
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
soma = a + b;

console.log(`SOMA = ${soma}`);