import React from 'react'

const categoryItems = [
    { id: 1, title: "Main Dish", desc: "(86 dishes)", image: "/images/home/category/img1.png" },
    { id: 2, title: "Break Fast", desc: "(12 break fast)", image: "/images/home/category/img2.png" },
    { id: 3, title: "Dessert", desc: "(48 dessert)", image: "/images/home/category/img3.png" },
    { id: 4, title: "Browse All", desc: "(255 Items)", image: "/images/home/category/img4.png" },
]

export default function Categories() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16">
                <div className='text-center'>
                    <p className='text-red uppercase tracking-wide font-medium text-lg'>Customer Favorites</p>
                    <h2 className='text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug'>Popular Categories</h2>
                </div>

                {/* categories */}

                <div className='flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12 '>
                    {
                        categoryItems.map((item, index) => {
                            return <div key={index} className='shadow-lg rounded-md bg-white py-6 px-5 w-60 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
                                <div className='flex w-full mx-auto items-center justify-center'>
                                    <img src={item.image} alt="" className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28' />
                                </div>
                                <div className='mt-5 space-y-1'>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>
        </>
    )
}
