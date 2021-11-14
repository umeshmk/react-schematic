# React-Layout (Development package)

<!-- ## Naming

```tsx
Container :  <Container> <Flex> <Grid>
Item      :  <Flex> <Grid> with boolean props "isFlexItem" / "isGridItem"

Types :
<> = styled component
props = Options | Media<Options>   // where Options are different for each props
Media<T> = {xs: T, md: T , lg:T}

<BaseContainer>    maxWidth
<BaseGrid>         cols rows gap
<BaseFlex>         direction
<BaseItem>         // Not needed use <Flex>/<Grid> as container & child together to avoid more nested components
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
- Never use grid/flex Items instead use grid/flex containers with boolean props `isFlexItem / isGridItem` . This avoids too much nested components.
- Breakpoints for Media queries - Must be (min-width) only. It will scale upwards to higher widths by default.
- Responsive breakpoints - predefined keys - `xs,sm,md,lg,xl`
- First key in breakpoints - value must always be `<key>:0`

## Unopinionated

- No extra global theme just use default styled components theme
- Responsive breakpoints as per your requirements (Only values not keys)
- Naming too like **xs** or **mobile**


-->
