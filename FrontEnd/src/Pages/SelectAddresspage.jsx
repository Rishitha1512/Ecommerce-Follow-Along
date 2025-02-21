import axios from 'axios';
import { useEffect, useState } from 'react';
import AddressList from '../component/AllAddress/Addresses';
import { useSelector } from 'react-redux';
export default function SelectAddres() {
  const [AllAddresses, setAllAddresses] = useState([]);
  const data = useSelector((state) => state.user);
  useEffect(() => {
    //api call to get addresses
    const fetchAddress = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('token missing please login again');
      }
      const response = await axios.get(
        `https://ecommerce-follow-along-judc.onrender.com/user/get-addresses?token=${token}`
      );
      console.log(response.data.userInfo);
      setAllAddresses(response.data.userInfo.address);
    };
    fetchAddress();
  }, []);
  return (
    <div>
      <AddressList addresses={AllAddresses} />;
    </div>
  );
}