/**
 * Example of an `onSend` hook.
 *
 * Assumes a Fastify server instance exists named `app`.
 */
app.addHook("onSend", async function (request, reply) {
	reply.headers({
		"Cache-Control": "no-store",
		Pragma: "no-cache",
	});
});
