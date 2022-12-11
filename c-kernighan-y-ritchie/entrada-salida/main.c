#include <stdio.h>
#include <stdlib.h>

#define IN 1
#define OUT 0

void checkCharacter(const char c, int* characters, int* words, int* lines, int* state){

    ++*characters;
    if(c == '\n')
        ++*lines;
    
    if(c==' ' || c=='\t' || c=='\n')
        *state = OUT;
    else if(!*state){
        ++*words;
        *state = IN;
    }

}

int main(){

    int c, characters, words, lines, state;

    characters = words = lines = 0;
    state = OUT;

    do{
        c = getchar();
        checkCharacter(c, &characters, &words, &lines, &state);

    }while(c!=EOF);

    printf("There are %d lines.\nThere are %d words.\nThere are %d characters.", lines, words, characters);

    return 0;

}