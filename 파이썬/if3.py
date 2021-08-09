sum = 0
while True:
    num = int(input('숫자를 입력하세요 - > '))
    if num < 0:
        break
    else:
        sum += num    
print(sum)        
