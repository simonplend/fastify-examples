// routes.js

export default async function routesPlugin(app) {
	/**
	 * Registering an `onSend` hook in a plugin encapsulation context.
	 */
	app.addHook("onSend", async function (request, reply) {
		reply.headers({
			"Cache-Control": "no-store",
			Pragma: "no-cache",
		});
	});

	/**
	 * The `onSend` hook will run for this route, and any others
	 * that are added to this route, or a child context.
	 */
	app.get("/results-b", async function (request, reply) {
		return [
			{ score: 51, date: "2022-07-12" },
			{ score: 32, date: "2022-07-11" },
		];
	});
}
