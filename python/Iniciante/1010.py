# https://www.urionlinejudge.com.br/judge/pt/problems/view/1010

linha = input().split(" ")
# codigo_peca_1 = int(linha[0]) # Não é utilizado
numero_de_pecas_1 = int(linha[1])
valor_peca_1 = float(linha[2])

linha = input().split(" ")
# codigo_peca_2 = int(linha[0]) # Não é utilizado
numero_de_pecas_2 = int(linha[1])
valor_peca_2 = float(linha[2])

valor_a_pagar = (numero_de_pecas_1 * valor_peca_1)
valor_a_pagar += (numero_de_pecas_2 * valor_peca_2)


print("VALOR A PAGAR: R$ {:.2f}".format(valor_a_pagar))
