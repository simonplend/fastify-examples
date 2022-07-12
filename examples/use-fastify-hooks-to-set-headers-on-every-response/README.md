# Examples: Use Fastify hooks to set headers on every response

These examples are included in the blog post [Use Fastify hooks to set headers on every response](https://simonplend.com/use-fastify-hooks-to-set-headers-on-every-response/).

## Example A

Register an `onSend` hook.

- View code: [example-a.js](example-a.js)

## Example B

Set headers for a collection of routes.

Approach: Register routes and an `onSend` hook in a plugin.

- View code: [example-b.js](example-b.js), [routes.js](routes.js)
- Run with `node example-b.js`
- Test with `curl localhost:3000/results-a localhost:3000/results-b -v`

## Example C

Set headers for all server responses.

Approach: Register an `onSend` hook in the root encapsulation context.

- View code: [example-c.js](example-c.js)
- Run with `node example-c.js`
- Test with `curl localhost:3000/results -v`

## Example D

Set headers for all server responses.

Approach: Register an `onSend` hook in a plugin and share the
context of the plugin with the context that registers it.

- View code: [example-d.js](example-d.js), [cache-headers-plugin.js](cache-headers-plugin.js)
- Run with `node example-d.js`
- Test with `curl localhost:3000/results -v`
