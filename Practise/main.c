#include<stdio.h>
#include<stdlib.h>

struct Node{
  int data;
  struct Node* next;
};

void Traversal(struct Node * ptr){
  while (ptr!=NULL)
  {
    printf("Element: %d\n",ptr->data);
    ptr = ptr->next;
  }
}

int main(int argc, char const *argv[])
{
  struct Node * head;
  struct Node * second;
  struct Node * third;

  head = (struct Node *)malloc(sizeof(struct Node));
  second = (struct Node *)malloc(sizeof(struct Node));
  third = (struct Node *)malloc(sizeof(struct Node));

  head->data = 7;
  head->next = second;
  
  second->data = 8;
  second->next = third;

  third->data = 10;
  third->next = NULL;

  Traversal(head);

  return 0;
}
