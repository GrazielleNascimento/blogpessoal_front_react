import React, { useContext, useEffect, useState } from 'react';
import { Triangle } from 'react-loader-spinner'; // Changed Dna to DNA for import
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Tema from '../../../models/Tema';
import { buscar } from '../../../services/Service';
import CardTemas from '../cardTemas/CardTemas';

function ListaTemas() {
  const [temas, setTemas] = useState<Tema[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTemas() {
    try {
      await buscar('/temas', setTemas, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarTemas();
  }, [temas.length]);
  
  return (
    <>
      {temas.length === 0 && (
        <Triangle
          visible={true}
          color= "purple"
          height="200"
          width="2000"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass="triangle-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temas.map((tema) => (
              <CardTemas key={tema.id} tema={tema} /> // Removed the fragment tags, as they are unnecessary here
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaTemas;