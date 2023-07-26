interface ProductsPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductsPageProps) {
  return <div>ProductsPage:{params.id}</div>
}
