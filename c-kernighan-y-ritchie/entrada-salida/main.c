#include <stdio.h>

int main(){

    long charactersNumber;

    charactersNumber = 0;

    while(getchar() != EOF)
        charactersNumber++;

    /* Esta función tambien cuenta el /n como caracter. */
    printf("%ld", charactersNumber);

    return 0;

}