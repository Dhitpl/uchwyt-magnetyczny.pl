export default function Page({ params }: { params: { slug: string } }) {
  return <div>Produkt: {params.slug}</div>
}
