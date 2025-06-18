export default async function MealPage({
  params,
}: {
  params: Promise<{ mealSlug: string }>;
}) {
  const { mealSlug } = await params;
  return <section></section>;
}
