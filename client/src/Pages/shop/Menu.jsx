import React, { useEffect, useState } from 'react'

export default function Menu() {

    const [menu, setMenu] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption, setSortOption] = useState("default");

    // Loadinf data
    useEffect(() => {

        // Fetch Data from the Backend

        const fetchData = async () => {

            try {

                const response = await fetch("/menu.json");
                const data = await response.json();
                // console.log(data);

                setMenu(data)
                setFilteredItems(data)
            }

            catch (error) {

                console.log("Error :", error)
            }
        }

        // call the function fetchData
        fetchData()
    }, [])

    // filtering data based on category
    const filterItems = (category) => {

        const filtered = category === "all" ? menu : menu.filter((item) => item.category === category)

        setFilteredItems(filtered);
        setSelectedCategory(category)
    }

    return (
        <>
            <div>

                {/* Menu Banner Section */}
                <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
                    <div className="py-48 flex flex-col justify-center items-center gap-8">

                        {/* text */}
                        <div className='text-center space-y-7 px-4'>
                            <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>For the Love of Delicious <span className='text-green'>Food</span></h2>
                            <p className='text-xl text-[#4A4A4A] md:w-4/5 mx-auto'>Come with family & feel the joy of mouthwatering food such as
                                Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
                                Rellenas and more for a moderate cost</p>
                            <button className='btn bg-green px-8 py-3 font-semibold text-white rounded-full'>Order Now</button>
                        </div>


                    </div>
                </div>

                {/* Menu Shop Section */}
                <div className='max-w-screen-2xl container mx-auto xl:px-24'>

                </div>
            </div>
        </>
    )
}
