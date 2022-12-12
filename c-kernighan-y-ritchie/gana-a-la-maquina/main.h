#define EASY 1
#define MEDIUM 2
#define HARD 3
#define EXTREME  4

#define COMPUTER 0
#define PLAYER 1
#define LOWER 'a'
#define UPPER '{'
#define SIZE UPPER - LOWER

/* PROTOTIPES. */
void gameModeMenu();
int validateGameMode(int gameMode);
void chooseGameMode();
void switchGameMode(const int gameMode);

void easyMode(const char unknownChar);