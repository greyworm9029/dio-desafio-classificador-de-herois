# Desafio: Classificador de Heróis

heroe = {'character': "Daniel", 'exp': 989,}

while True: 
    if heroe["exp"] < 1000:
        print(f"Se XP for menor do que 1.000 = Ferro")
    elif 1000 <= heroe["exp"] <= 2000:
        print(f"Se XP for entre 1.001 e 2.000 = Bronze")
    elif 2001 <= heroe["exp"] <= 5000:
        print(f"Se XP for entre 2.001 e 5.000 = Prata")
    elif 6001 <= heroe["exp"] <= 7000:
        print(f"Se XP for entre 6.001 e 7.000 = Ouro")
    elif 7001 <= heroe["exp"] <= 8000:
        print(f"Se XP for entre 7.001 e 8.000 = Platina")
    elif 8001 <= heroe["exp"] <= 9000:
        print(f"Se XP for entre 8.001 e 9.000 = Ascendente")
    elif 9001 <= heroe["exp"] <= 10000:
        print(f"Se XP for entre 9.001 e 10.000 = Imortal")
    else:
        print(f"Se XP for maior ou igual a 10.001 = Radiante")
        break
    # Execução do programa 
    print(f"The Hero named by {heroe['character']} is on level {heroe['exp']}.")
    heroe["exp"] += 1000  # Incrementa o XP para que o loop não seja infinito