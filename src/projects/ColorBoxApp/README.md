### Color-Box App

#### Core idea:

You have a collection of items → each item has a color → UI is just a projection of that state.

So think in 3 layers:

1. State (source of truth)
   Array of colors

2. Transformation
   Functions that generate or update colors

3. View
   Grid rendering based on state
# 
#### Data design:

`type Color = string;`

`type State = Color[];`

Example:

```
["#ff0000", "#00ff00", "#0000ff"]
```

> Index = identity of each box. Simple and efficient.
#
#### Core constraints
1. Initial render → all colors random
2. Click → only that index changes
3. New color ≠ previous color

> If ignore constraint 3, UX breaks.
#
#### Random color generation 
Avoid naive Math.random() strings. Use deterministic format:
```
const randomColor = (): string => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
};
```
Why this works:

```
16777215 = 0xFFFFFF → full RGB space
padStart ensures valid 6-digit hex
```
#
#### Guarantee “different color” (critical logic)

> Do NOT rely on probability.

```
const generateDifferentColor = (prev: string): string => {
  let next = randomColor();

  while (next === prev) {
    next = randomColor();
  }

  return next;
};
```
> This loop is safe because collision probability is extremely low.
#
#### State initialization
```
const generateInitialColors = (count: number): string[] => {
  return Array.from({ length: count }, randomColor);
};
```
# 
#### Component architecture
```
App
 └── ColorGrid
       └── ColorBox
```
