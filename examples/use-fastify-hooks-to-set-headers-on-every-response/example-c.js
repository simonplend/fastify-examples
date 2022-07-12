// server.js
import Fastify from "fastify";

const app = Fastify({
	logger: true,
});

/**
 * Registering an `onSend` hook in the root encapsulation context.
 */
app.addHook("onSend", async function (request, reply) {
	reply.headers({
		"Cache-Control": "no-store",
		Pragma: "no-cache",
	});
});

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
