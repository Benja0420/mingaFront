import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const url = import.meta.env.VITE_API_URL;
  const { username } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          url + username
        );
        setProfileData(response.data);
      } catch (error) {
        setError('Error al obtener datos del perfil.');
        console.error(error);
      }
    };

    if (username) {
      fetchProfileData();
    }
  }, [url,username]);

  if (error) {
    return <div> {error} </div>;
  }

  if (!profileData) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md mx-auto p-8 rounded-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Foto de perfil"
            className="rounded-full w-32 md:w-48 h-32 md:h-48 object-cover"
          />
        </div>
        <h2 className="mb-2 font-semibold text-2xl text-center">{profileData.bio}</h2>
        <p className="mb-4 text-center text-gray-600">
          Información adicional del usuario.
        </p>
      </div>
    </div>
  );
}
