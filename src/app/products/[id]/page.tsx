interface ProductsPageProps {
  params: {
    productId: string
  }
}

export default function ProductPage({ params }: ProductsPageProps) {
  return <div>ProductsPage:{params.productId}</div>
}
