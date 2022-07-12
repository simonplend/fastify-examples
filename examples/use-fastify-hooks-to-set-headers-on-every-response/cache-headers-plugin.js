// cache-headers-plugin.js
import fastifyPlugin from "fastify-plugin";

async function cacheHeadersPlugin(app) {
	/**
	 * Registering an `onSend` hook in a plugin encapsulation context.
	 */
	app.addHook("onSend", async function (request, reply) {
		reply.headers({
			"Cache-Control": "no-store",
			Pragma: "no-cache",
		});
	});
}

/**
 * Share the context of this plugin with the context that registers it.
 */
export default fastifyPlugin(cacheHeadersPlugin);
