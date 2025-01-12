import { useEffect, useState } from "react";
import Card from "../component/ProductCard/Card.jsx";
import axios from "axios";

function HomePage() {
  const [data, setdata] = useState();
  
  const fetchProduct = async () => {
    const res = await axios.get(
      "http://localhost:8080/product/get-products"
    );
    setdata(res.data.data);
  };

  useEffect(() => {
    const callhandle = async () => {
      await fetchProduct();
    };
    callhandle();
  }, []);
  console.log(data);
  const handleDelete = async (id) => {
    console.log('id', id);
    const data = await axios.delete(`http://localhost:8080/product/${id}`);
    setdata(data.data.data);
  };

  return (
    <>
      <h1 className="text-center">Home Page for Follow Along</h1>

      <div className="grid grid-cols-3 gap-4">
        {data?.map((ele, index) => {
          return (
            <div
              key={index}
              style={{ margin: "auto" }}
              className="border-white"
            >
              <Card
                title={ele.title}
                image={ele.images[0] ? ele.images[0] : "Product Image missing"}
                Index={index}
                description={ele.description}
                originalPrice={ele.originalPrice}
                discountedPrice={ele.discountedPrice}
                rating={ele.rating}
                id = {ele._id}
                handleDelete={handleDelete}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
