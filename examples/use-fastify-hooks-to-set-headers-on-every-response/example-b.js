// server.js
import Fastify from "fastify";

import routes from "./routes.js";

const app = Fastify({
	logger: true,
});

/**
 * A plugin that registers an `onSend` hook and a route.
 */
app.register(routes);

/**
 * The `onSend` hook will *not* run for this route as it
 * hasn't been registered in this encapsulation context.
 */
app.get("/results-a", async function (request, reply) {
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
