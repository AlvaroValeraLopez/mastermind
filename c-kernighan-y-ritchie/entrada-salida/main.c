#include <stdio.h>

int main(){

    int c, newLines;

    newLines = 0;

    do{
        c = getchar();
        if(c == '\n')
            newLines++;
    }while(c!=EOF);

    printf("%ld", newLines);

    return 0;

}