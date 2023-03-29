import { useState, useEffect } from 'react';

function HouseList() {
  const [houses, setHouses] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/houses")
      .then(res => res.json())
      .then(data => {
        setHouses(data);
        setOriginalData(data);
      })
      .catch(error => console.log(error))
  }, []);

  const filterType = (houseType) => {
    if (houseType === "All") {
      setHouses(originalData);
    } else {
      setHouses(
        originalData.filter((item) => item.house_type === houseType)
      );
    }
  };

  const filterPrice = (price) => {
    if (price === "All") {
      setHouses(originalData);
    } else {
      setHouses(
        originalData.filter((item) => {
          switch (price) {
            case '10000':
              return item.price >= 10000 && item.price < 50000;
            case '50000':
              return item.price >= 50000 && item.price < 100000;
            case '100000':
              return item.price >= 100000 && item.price < 200000;
            case '200000':
              return item.price >= 200000;
            default:
              return true;
          }
        })
      );
    }
  };  
  

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Top Rated Houses For You
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col justify-between'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => filterType('All')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('4 Bedroom')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              4 Bedroom
            </button>
            <button
              onClick={() => filterType('3 Bedroom')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              3 Bedroom
            </button>
            <button
              onClick={() => filterType('2 Bedroom')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              2 Bedroom
            </button>
            <button
              onClick={() => filterType('1 Bedroom')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              1 Bedroom
            </button>
            <button
              onClick={() => filterType('Studio')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Studio
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
          <button
          onClick={() => filterPrice('10000')}
          className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
        >
          $10,000
        </button>
        <button
          onClick={() => filterPrice('50000')}
          className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
        >
          $50,000
        </button>
        <button
          onClick={() => filterPrice('100000')}
          className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
        >
          $100,000
        </button>
        <button
          onClick={() => filterPrice('200000')}
          className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
        >
          $200,000
        </button>
        
        <button
          onClick={() => setHouses([])}
          className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
        >
          Reset
        </button>
        
      </div>
    </div>
  </div>

  {/* Houses Grid */}
  <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
    {houses.map((house, index) => (
      <div
        key={index}
        className='border shadow-lg rounded-lg hover:scale-105 duration-300'
      >
        <img
          src={house.img}
          alt={house.title}
          className='w-full h-[200px] object-cover rounded-t-lg'
        />
        <div className='flex justify-between px-2 py-4'>
          <p className='font-bold'>{house.title}</p>
          <p>
            <span className='bg-orange-500 text-white p-1 rounded-full'>
              {house.price}
            </span>
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
);
}

export default HouseList;