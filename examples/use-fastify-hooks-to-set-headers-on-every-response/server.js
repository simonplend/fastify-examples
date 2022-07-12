import Fastify from "fastify";

const app = Fastify({
	logger: true,
});

app.get("/", async function (request, reply) {
	return { up: true };
});

try {
	await app.listen({ port: 3000 });
} catch (error) {
	app.log.error(error);
	process.exit(1);
}
