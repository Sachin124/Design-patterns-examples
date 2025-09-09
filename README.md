# Design Patterns Examples

## Adapter Pattern

The Adapter Pattern allows incompatible interfaces to work together by acting as a translator between them.

### Example: Pegs and Holes

Suppose you have a system designed for round pegs and round holes. Later, you need to fit square pegs into round holes. Instead of changing your system or the pegs, you use an **Adapter** to make them compatible.

- **RoundHole** expects objects with a `getRadius()` method.
- **RoundPeg** provides `getRadius()`.
- **SquarePeg** does not fit, but a **SquarePegAdapter** converts a square peg's width to an equivalent radius.

See [Pattern Adapter/Adapter-Pattern.ts](Pattern%20Adapter/Adapter-Pattern.ts) for the TypeScript implementation.

### How it works

- The adapter calculates the equivalent radius for a square peg so it can be tested against a round hole.
- This demonstrates how the Adapter Pattern helps integrate new code with existing systems.

### Usage

Run the TypeScript file to see the adapter in action:

```sh
ts-node "Pattern Adapter/Adapter-Pattern.ts"