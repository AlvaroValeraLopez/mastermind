#include <stdio.h>

int main(){

    int c;

    do{
        c = getchar();
        putchar(c);
    }while(c!=EOF);

    return 0;

}