// server.js
import Fastify from "fastify";

import cacheHeadersPlugin from "./cache-headers-plugin.js";

const app = Fastify({
	logger: true,
});

/**
 * A plugin that registers an `onSend` hook.
 *
 * Everything registered in that plugin is shared with this
 * context by wrapping it with `fastify-plugin`.
 */
app.register(cacheHeadersPlugin);

/**
 * The `onSend` hook will run for this route, and any others
 * that are added to the root context, or a child context.
 */
app.get("/results", async function (request, reply) {
	return [
		{ score: 51, date: "2022-07-12" },
		{ score: 32, date: "2022-07-11" },
	];
});

try {
	await app.listen({ port: 3000 });
} catch (error) {
	app.log.error(error);
	process.exit(1);
}
