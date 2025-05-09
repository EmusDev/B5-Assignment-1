
What are some differences between interfaces and types in TypeScript?

Ans.to the que :1
Interface is an important function of type.
An alternative to type is interface.
We usually use interfaces for objects.

What is the use of the keyof keyword in TypeScript? Provide an example
Ans.to the que :2

Keyof word section key is separated in object

Exam:
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};
