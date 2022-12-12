#include "main.h"
#include <time.h>
#include <stdio.h>
#include <stdlib.h>

char generateRandomChar(){
    return (rand() % (UPPER - LOWER + 1)) + LOWER;  
}

/* PRINT MENU AND CHOOSE GAME MODE. */
void gameModeMenu(){

    printf("\n#########################################\n");
    printf("#                                       #\n");
    printf("#  Modos de juego:                      #\n");
    printf("#  1. Facil.                            #\n");
    printf("#  2. Medio.                            #\n");
    printf("#  3. Dificil.                          #\n");
    printf("#  4. Extremo.                          #\n");
    printf("#                                       #\n");
    printf("#########################################\n");
    
}
int validateGameMode(int gameMode){
    int validation = gameMode >= 1 && gameMode <= 4;

    if(!validation)
        printf("El modo de juego indicado no es valido.\nDebe ser un valor entero entre 1 y 3.\n");

    return validation;
}
void chooseGameMode(){

    int gameMode;
    
    do{
        gameModeMenu();
        printf("Por favor, indica la dificultad de la partida.\n");
        scanf("%d", &gameMode);
        fflush(stdin);
    }while(!validateGameMode(gameMode));

    switchGameMode(gameMode);

}
void switchGameMode(const int gameMode){

    char unknownChar = generateRandomChar();
    printf("La letra es: %c", unknownChar);
    
    switch (gameMode){
    case EASY:
        printf("\nHas seleccionado el modo facil.\n");
        easyMode(unknownChar);
        break;
    
    default:
        break;
    }
}

/* INITIALIZATION OF PLAYERS STRUCTURES. */
void guessesMatrixInitialization(int guessesMatrix [UPPER - LOWER][2]){
    for(int i = 0; i < SIZE; i++){
        guessesMatrix[i][0] = LOWER + i;
        guessesMatrix[i][1] = 0;
    }
}
void showGuesessMatrix(int guessesMatrix [UPPER - LOWER][2]){
    
    int i;

    for(i = 0; i < SIZE; i++)
        printf("[%c] ", guessesMatrix[i][0]);
    printf("\n");

    for(i = 0; i < SIZE; i++)
        printf("[%d] ", guessesMatrix[i][1]); 
    printf("\n");

}




int validateGuess(const int guess){
    int validation = guess >= LOWER && guess <= UPPER;

    if(!validation)
        printf("\nLa letra introducida no es valida.\nDebe ser una letra minuscula entre la a y la z.\n\n");  
    
    return validation;
}


int userGuess(const int unknownCharacter, int userGuesses [UPPER - LOWER][2]){
    
    char guess = ' ';

    do{
        printf("\nEs tu turno, jugador. Esta es tu tabla de juego:\n");
        showGuesessMatrix(userGuesses);
        printf("Por favor, introduce una letra entre la a y la z: ");
        guess = getchar();
        fflush(stdin);

    }while(!validateGuess(guess));

    if((int)guess == (int)unknownCharacter)
        return 1;
     
    userGuesses[guess - LOWER][1] = ((int)guess - unknownCharacter) < 0 ? 1 : -1;
    return 0;
}


int computerGuess(const int unknownCharacter, int computerGuesses [UPPER - LOWER][2]){

    int guess = LOWER;
    
    if(guess == (int)unknownCharacter)
        return 1;
    
    guess++;
    return 0;
}


int switchTurn(const int unknownCharacter, int userGuesses [UPPER - LOWER][2], int computerGuesses [UPPER - LOWER][2]){
    
    int turn, answer = PLAYER;

    if(turn == PLAYER){
        answer = userGuess(unknownCharacter, userGuesses);
        turn = COMPUTER;
    }else{
        answer = computerGuess(unknownCharacter, computerGuesses);
        turn = PLAYER;
    }

    return answer;
}


void easyMode(const char unknownChar){
    
    int computerGuesses [UPPER - LOWER][2];
    int userGuesses [UPPER - LOWER][2];

    guessesMatrixInitialization(computerGuesses);
    guessesMatrixInitialization(userGuesses);

    int guess;
    do{
        guess = switchTurn(unknownChar, userGuesses ,computerGuesses);
    }while(!guess);
    

}


int main(){

    srand(time(0));

    chooseGameMode();

    return 0;
}