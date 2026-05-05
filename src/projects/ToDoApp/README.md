#### TO-DO LIST APP
##### Core idea:
- Don’t “mutate UI”.
- Apply `operations → produce new state → render UI from state`
# 

##### Folder structure
```
src/
  core/  ← pure logic (no React)
    types.ts
    reducer.ts
    history.ts

  hooks/
    useTodos.ts  ← React integration

  components/
    TodoItem.tsx
    TodoList.tsx
    Toolbar.tsx

  features/
    selection/
    reorder/

  app/
    App.tsx
```
Rule: Anything testable without React → goes in `core/``

# 