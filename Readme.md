# React-Layout (Development package)

## Naming

```tsx
Types :
<> = styled component
props = Options | Media<Options>   // where Options are different for each props
Media<T> = {xs: T, md: T , lg:T}

<Container>    maxWidth
<Grid>         cols rows gap
<Flex>         direction
<Item>
// - Not needed use <Flex> as container & child together to avoid more nested components
    <Flex isGridItem > OR  <Flex isFlexItem >
    <Grid isGridItem > OR  <Grid isFlexItem >




```

## Opinionated

_Not strict though_

- Based on styled components
- Use this components for just layouts on different media sizes
  - layouts - `display, position`
  - `margin, padding `
- Import first, then Install with breakpoints object and reexport as element/Grid etc
- No extra global theme just use default styled components theme
- Never use grid/flex Items instead use grid/flex containers with boolean props `isFlexItem / isGridItem` . This avoids too much nested components.
