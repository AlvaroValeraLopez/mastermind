#include <stdio.h>

#define IN 1
#define OUT 0

int main(){

    int c, characters, words, lines, state;

    characters = -1;
    words = lines = 0;
    state = OUT;

    do{
        c = getchar();
        characters++;
        if(c == '\n')
            lines++;
        
        if(c==' ' || c=='\t' || c=='\n' )
            state = OUT;
        else if(!state){
            words++;
            state = IN;
        }

    }while(c!=EOF);

    printf("There are %d lines.\nThere are %d words.\nThere are %d characters.", lines, words, characters);

    return 0;

}