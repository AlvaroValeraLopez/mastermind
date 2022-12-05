#include <stdio.h>

int main(){
    const double conversionRate = (double)5/9;
    double celsius, fahrenheit = 250;

    celsius = (fahrenheit - 32) * conversionRate;
    printf("%lf celsius grades equals %lf fahrenheit grades.", celsius, fahrenheit);

    return 0;

}