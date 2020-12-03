# Design Principles

## DRY

DRY - Don't repeat yourself

This means not to duplicate code.

If code is repeated move it to it's own function and call that function in places where the duplicate code was originally called.

## KISS

KISS - Keep it simple stupid

Don't over-complicate code when programming.

## YAGNI

YAGNI - You ain't gonna need it

Functionality should not be added until it's actually required.

Code should be designed in a way that additional functionality can be added though.

## SLAP

SLAP - Single level of abstraction principle

Functions should be short and do one thing.

## Low Coupling / High Cohesion

- [Medium blog](https://medium.com/clarityhub/low-coupling-high-cohesion-3610e35ac4a6)

## SOLID

- S - Single responsibility principle
- O - Open / closed principle
- L - Liskov substitution principle
- I - Interface segregation principle
- D - Dependancy inversion principle

### Single responsibility 

> A class should have one, and only one, reason to change.

- A class should always a single task, not multiple.
- This keeps the class small, light as easy to work with.
- Classes are more likely to be reused.

### Open / closed principle 

> You should be able to extend a classes behavior, without modifying it.

- Classes should be coded in a way that prevents the need to modify it in future.
- Extend classes or create inherited classes in order to provide new functionality.
- Use the Strategy class design pattern when required. 

### Liskov substitution principle

> Derived classes must be substitutable for their base classes.

- Sub-classes should have the same methods as it's parent so it can be used the same way.

### Interface segregation principle

> Make fine grained interfaces that are client specific.

- Classes inheriting interfaces may not need all inherited methods.
- Interfaces should be small, not complex.
- Makes them easier to reuse.

### Dependancy inversion principle

> Depend on abstractions, not on concretions.

- Use abstract or interfaces instead of concreate classes.
- Concreate classes may require replacing, using abstractions prevents breaking OCP.

## References

- [The Full Stack blog](https://thefullstack.xyz/dry-yagni-kiss-tdd-soc-bdfu)
- [Object oriented design principles](https://devcave.pl/notatnik-juniora/zasady-projektowania-kodu)
- [10 coding principles](https://areknawo.com/10-coding-principles-and-acronyms-demystified/)

### SOLID References

- [Solid principles blog](https://medium.com/@mari_azevedo/s-o-l-i-d-principles-what-are-they-and-why-projects-should-use-them-50b85e4aa8b6)
- [Solid simplified](https://levelup.gitconnected.com/solid-principles-simplified-php-examples-based-dc6b4f8861f6)
- [Tech Target](https://whatis.techtarget.com/definition/SOLID-software-design-principles)
- [Hash Bang Code](https://www.hashbangcode.com/article/solid-principles-php)

