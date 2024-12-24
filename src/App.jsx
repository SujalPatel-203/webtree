import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  if (!user) {
    return <div className="text-center py-5">Loading...</div>;
  }
  
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-fixed text-gray-800"
      style={{
        backgroundImage: "url(https://i.ibb.co/Qjt7TJn/milad-fakurian-E8-Ufcyxz514-unsplash-1.jpg)"
      }}
    >
      <div
        className="max-w-2xl min-h-[250px] p-12 rounded-3xl bg-white/60 backdrop-blur-md shadow-2xl border border-white/30 flex items-center font-poppins transform transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50"
      >
        <div className="flex items-center gap-6">
          <div className="profile_image">
            <img
              className="w-40 h-40 object-cover rounded-xl"
              src={user.picture.large}
              alt="User"
            />
          </div>
          <div className="profile_info flex flex-col gap-4">
            <p className="text-4xl font-bold">{user.name.first} {user.name.last}</p>
            <p className="text-lg text-gray-600 capitalize">{user.gender}</p>
            <p className="text-lg text-gray-800">{user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
