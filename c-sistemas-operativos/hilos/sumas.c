#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>
#include <pthread.h>

#define N 10

int matrix [N][N];

void* addElements(void *p){

    uintptr_t sum;
    int i, j;

    sum = 0;

    for(i=0; i<N; i++){
        for(j=0; j<N; j++)
            sum += matrix[i][j];
    }

    pthread_exit( (void *) sum );


}

void fillMatrixNumbers(){

    int i, j, number;

    number = 1;

    for(i = 0; i < N; i++){
        for(j = 0; j < N; j++)
            matrix[i][j] = number++;
    }

}

void printMatrix(){

    int i, j;

    for(i = 0; i < N; i++){
        for(j = 0; j < N; j++)
            printf("%03d ", matrix[i][j]);
        printf("\n");
    }

}

int main(){

    pthread_t threads [N];
    int resultado [N];

    fillMatrixNumbers();
    printMatrix();

    int i;

    for(i= 0; i < N; i++)
        pthread_create(&threads[i], NULL, addElements, NULL);
    
    for(i= 0; i < N; i++)
        pthread_join(threads[i], (void *) &resultado[i]);
    
    for(i= 0; i < N; i++)
        printf("%d\n", resultado[i]);

    return 0;
}