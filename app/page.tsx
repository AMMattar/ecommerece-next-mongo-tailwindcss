import getAllProducts from "@/lib/getAllProducts"
import Product from "./components/Product"
import SearchBar from "./components/SearchBar"
import { Suspense } from 'react'
import Footer from "./components/Footer"

export default async function Home() {
  const productsData: Promise<response> = getAllProducts()

  const products = await productsData

  const content = (
    <>
    <div className="p-5">
      <SearchBar />
      <div className="grid grid-cols-3 gap-4">
        <Suspense fallback={<h2>Loading ...</h2>}>
          {/* @ts-expect-error Server Component */}
          <Product promise={products} />
        </Suspense>
      </div>
      </div>
      <Footer />
    </>
  )

  return content
}
