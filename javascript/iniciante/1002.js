// https://www.urionlinejudge.com.br/judge/pt/problems/view/1002

// Altere a entrada para testar localmente
var input = `2.0`;

// VSCODE: readFileSync() comentado
// URI ONLINE: readFileSync() descomentado
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');

var pi = 3.14159
var raio = parseFloat(lines.shift())
var area = pi * Math.pow(raio, 2)
   
console.log(`A=${area.toFixed(4)}`)