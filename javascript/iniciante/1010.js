// https://www.urionlinejudge.com.br/judge/pt/problems/view/1010

// Altere a entrada para testar localmente
var input = `12 1 5.30
16 2 5.10`;

// VSCODE: readFileSync() comentado
// URI ONLINE: readFileSync() descomentado
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');


var line_1 = lines.shift().split(' ');
// codigo_peca_1 = parseInt(line_1[0]) # Não é utilizado
numero_de_pecas_1 = parseInt(line_1[1]);
valor_peca_1 = parseFloat(line_1[2]);

var line_2 = lines.shift().split(' ');
// codigo_peca_2 = parseInt(line_2[0]) # Não é utilizado
numero_de_pecas_2 = parseInt(line_2[1]);
valor_peca_2 = parseFloat(line_2[2]);

valor_a_pagar = (numero_de_pecas_1 * valor_peca_1);
valor_a_pagar += (numero_de_pecas_2 * valor_peca_2);

console.log(`VALOR A PAGAR: R$ ${valor_a_pagar.toFixed(2)}`);