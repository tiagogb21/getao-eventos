import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container } from './styles';

import { estados, eventos, turnos } from '../../utils/data';

function Admin() {
  const [citys, setCitys] = useState([]);
  const [siglaEstado, setSiglaEstado] = useState('ac');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [evento, setEvento] = useState('');
  const [turno, setTurno] = useState('');
  const [preco, setPreco] = useState('');
  const [image, setImage] = useState('');
  const [allFields, setAllFields] = useState({
    estado,
    cidade,
    evento,
    turno,
    preco
  });
  const [verify, setVerify] = useState(false);

  const handleClickButton = (e) => {
    e.preventDefault();
    setAllFields({
      estado,
      cidade,
      evento,
      turno,
      preco
    });
  };

  useEffect(() => {
    if (estado && cidade && evento && turno && preco) {
      setVerify(true);
    }
  }, [estado, cidade, evento, turno, preco]);

  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${siglaEstado}/distritos`
      )
      .then((response) => setCitys(response.data));
  }, [siglaEstado]);

  const handleClickInput = (target) => {
    const optionTarget = target.options[target.selectedIndex];
    setEstado(optionTarget.textContent);
    return setSiglaEstado(optionTarget.id);
  };

  return (
    <Container>
      <form action="">
        <h1>Bem vindo, administrador!</h1>
        <article>
          <p>Escolha o estado: </p>
          <select
            name=""
            id=""
            onClick={({ target }) => handleClickInput(target, 'estado')}
          >
            {estados !== undefined &&
              estados.map((est) => (
                <option value="" key={est.id} id={est.sigla}>
                  {est.estado}
                </option>
              ))}
          </select>
        </article>
        <article>
          {citys.length > 0 && (
            <>
              <p>Escolha a cidade:</p>
              <select
                name=""
                id=""
                onClick={({ target }) => {
                  const cidade = target.options[target.selectedIndex].textContent;
                  setCidade(cidade);
                }}
              >
                {citys.length > 0 &&
                  citys.map((city) => (
                    <option key={city.id} id={city.nome}>
                      {city.nome}
                    </option>
                  ))}
              </select>
            </>
          )}
        </article>
        <article>
          <p>Escolha o tipo de evento: </p>
          <select
            name=""
            id=""
            onClick={({ target }) => {
              const evento = target.options[target.selectedIndex].textContent;
              setEvento(evento);
            }}
          >
            {eventos !== undefined &&
              eventos.map((ev) => (
                <option value="" id={ev} key={ev}>
                  {ev}
                </option>
              ))}
          </select>
        </article>
        <article>
          <p>Escolha o turno:</p>
          <select name="" id="">
            {turnos !== undefined &&
              turnos.map((trn) => (
                <option value="" id={trn} key={trn}>
                  {trn}
                </option>
              ))}
          </select>
        </article>
        <label htmlFor="">
          Preço
          <input
            type="text"
            placeholder="R$"
            onChange={({ target }) => setPreco(target.value)}
          />
        </label>
        <label htmlFor="">
          Imagem:
          <input
            type="file"
            accept="image/*"
            onChange={({ target }) => {
              console.log(target.files);
              setImage(target);
            }}
          />
        </label>
        <button type="submit" onClick={(e) => handleClickButton(e)}>
          Cadastrar
        </button>
      </form>
      {verify && <h2>Cadastro efetuado com sucesso!</h2>}
    </Container>
  );
}

export default Admin;
