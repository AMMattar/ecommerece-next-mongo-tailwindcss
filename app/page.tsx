import getAllProducts from "@/lib/getAllProducts"

export default async function Home() {
  const productsData: Promise<response> = getAllProducts()

  const products = await productsData

  const content = (
    <>
      {products.product.map(product => {
        return (
          <div className="p-5">
            <div>
              <h2 className="text-2xl">{product.category}</h2>
              <div className="py-4">
                <div className="w-64">
                  <div className="bg-blue-100 p-5 rounded-xl">
                    <img src={product.picture as string} alt="iphone" />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                  </div>
                  <p className="text-sm mt-1 leading-4">{product.description}</p>
                  <div className="flex mt-1">
                    <div className="text-2xl font-bold grow">${product.price}</div>
                    <button className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      
    </>
  )

  return content
}
