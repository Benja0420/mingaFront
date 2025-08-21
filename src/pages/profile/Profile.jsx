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
          url+'authors/' + username
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
/* 
_id
66fe32336aff4962dc74ea72

ObjectId
user_id
66e964e7fd305a8e2fe010fd

ObjectId
bio
Este es el bio del autor Benjaja

String
__v
0
 */
    <div>
      <h1>Perfil de {profileData.username}</h1>
      <p>Bio: {profileData.bio}</p>
    </div>
  );
}
