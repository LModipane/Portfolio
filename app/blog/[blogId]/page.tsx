export default async function Home({ params }: { params: Promise<{ blogId: string }> }) {
	const { blogId } = await params;
	return (
		<main className="h-full w-full">
			<h2>{blogId}</h2>
		</main>
	);
}
