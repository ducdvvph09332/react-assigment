import React from 'react'

const Products = ({products, deleteProduct}) => {
    console.log(products)
    const detailPro = (id) => {
        console.log(id);
    }

    return (
        <section className="products">
            <h1 className="text-4xl py-4">Sản phẩm nổi bật</h1>
            <div className="grid grid-cols-3 gap-3">
                {products.map(({id, image, name, price}, index) => (
                        <div className="pro-item border-solid border-2 border-gray-200 p-4" key={index}>
                            <img src={image} className="" alt="" />
                            <div className="pro-title text-orange-500 text-xl font-semibold pt-5">
                            {name}
                            </div>
                            <div className="pro-content">
                            {price}
                            </div>
                            <br />
                            <div className="flex justify-center">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                                onClick={() => detailPro(id)}>
                                    Detail
                            </button>

                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
                                onClick={() => deleteProduct(id)}
                                >
                                    Delete
                            </button>
                            </div>
                        </div>
                    )
                )}
            </div>
        </section>
    )
}

export default Products
