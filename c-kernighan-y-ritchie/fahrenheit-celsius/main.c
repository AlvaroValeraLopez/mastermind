#include <stdio.h>

int main(){
    const double conversionRate = 5.0/9.0;
    double celsius, fahrenheit = 250;

    celsius = (fahrenheit - 32) * conversionRate;
    printf("%lf celsius grades equals %lf fahrenheit grades.", celsius, fahrenheit);

    return 0;

}