#include<stdio.h>
void check_box(int arr[][9],int temp[],int i,int j)
{
    int bi,bj;
    bi=i/3;
    bj=j/3;
    int fi=bi*3;
    int fj=bj*3;
    int l,m;
    for(l=fi;l<fi+3;l++)
    {
        for(m=fj;m<fj+3;m++)
        {
            if(arr[l][m]!=0)
            {
                temp[arr[l][m]]=1;
            }
        }
    }
}
void check_row(int arr[][9],int temp[],int i,int j)
{
    int l;
    for(l=0;l<9;l++)
    {
        if(arr[i][l]!=0)
        {
            temp[arr[i][l]]=1;
        }
    }
}
void check_column(int arr[][9],int temp[],int i,int j)
{
    int l;
    for(l=0;l<9;l++)
    {
        if(arr[l][j]!=0)
        {
            temp[arr[l][j]]=1;
        }
    }
}
void copy(int a[][9],int b[][9])
{
    int i,j;
    for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
        {
            a[i][j]=b[i][j];
        }
    }
}
void print(int arr[][9])
{
    int i,j;
    for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
        {
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
}
int fill_soduku(int arr[][9])
{
    //printf(" 1 ");
    int c=0;
    int i,j;
    for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
        {
            if(arr[i][j]==0)
            {
                c++;
            }
        }
    }
    if(c==0)return 1;
    for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
        {
            if(arr[i][j]==0)
            {
                int temp[10]={0};
               // printf("1");
                check_box(arr,temp,i,j);
                check_row(arr,temp,i,j);
                check_column(arr,temp,i,j);
               // printf("1");
                int k,flag=0;
                for(k=1;k<=9;k++)
                {
                    if(temp[k]==0)
                    {
                       // printf("1");
                        int tsod[9][9];
                        copy(tsod,arr);
                        tsod[i][j]=k;
                        if(fill_soduku(tsod))
                        {
                           copy(arr,tsod);
                           flag=1;
                           break;
                        }

                    }
                }
               // print(arr);
                if(flag==0)
                return 0;
                else
                return 1;

            }
        }
    }
    return 0;
}
int main()
{
    int arr[9][9]={0};
    int i,j;
    for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
        scanf("%d",&arr[i][j]);
    }
    print(arr);
    printf("filled soduku is\n");
    if(fill_soduku(arr))
    print(arr);
    else
    printf("Invalid");
}
