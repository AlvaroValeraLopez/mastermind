#include <stdio.h>

int main(){

    int c, newLines;

    newLines = 0;

    while((c = getchar()) != EOF){
        if(c=='\n')
            newLines++;
    }

    printf("%ld", newLines);

    return 0;

}