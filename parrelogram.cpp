#include<iostream>
#include<conio.h>
#include<iomanip>
using namespace std;
int main()
{
double base, height, area;

cout<<showpoint;
cout<<setprecision(10);

cout<<"Enter the base : ";
cin>>base;

cout<<"Enter the height : ";
cin>>height;

area = base * height;
cout<<setw(20)<<"This is number of Parrelogram :: "<<area;

    getch();
}