# https://www.urionlinejudge.com.br/judge/pt/problems/view/1002

pi = 3.14159
raio = float(input())

area = round(pi * pow(raio, 2), 4)

print("A={:.4f}".format(area))
