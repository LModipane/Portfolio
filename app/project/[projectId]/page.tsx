export default async function Home({ params }: { params: Promise<{ projectId: string }> }) {
	const { projectId } = await params;
	return (
		<main className="h-full w-full">
			<h1 className="text-2xl font-bold">Project {projectId}</h1>
		</main>
	);
}
