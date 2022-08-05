import React, { useState /*, useEffect */ } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import MyContext from './index';

function MyProvider({ children }) {
  const [event, setEvent] = useState('');
  const [eventsInfo, setEventsInfo] = useState([]);
  const [eventsInfoStore, setEventsInfoStore] = useState([]);
  const [eventTarget, setEventTarget] = useState({});
  const [shoppingCart, setShoppingCart] = useState([]);

  const filterByEvents = (evt) => {
    const filterEvents = eventsInfoStore.filter(({ nome }) => {
      return nome.toLowerCase().includes(evt.toLowerCase());
    });
    return setEventsInfo(filterEvents);
  };

  const getEventsInfo = async (name) => {
    try {
      let headers = {
        headers: {
          Accept: 'application/json'
        }
      };

      Axios.get('http://localhost:8080/eventos', headers).then((response) => {
        const getData = response.data;
        const eventosFilter = getData.filter((item) => item.tipo === name);
        setEventsInfoStore(eventosFilter);
        localStorage.setItem('eventos', JSON.stringify(eventosFilter));
        return setEventsInfo(eventosFilter);
      });
    } catch (error) {
      console.log('error = ' + error);
      console.log(error.response.data.errors);
    }
  };

  const store = {
    event,
    setEvent,
    getEventsInfo,
    eventsInfo,
    eventTarget,
    setEventTarget,
    setEventsInfo,
    setEventsInfoStore,
    filterByEvents,
    shoppingCart,
    setShoppingCart
  };

  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any)
}.isRequire;

export default MyProvider;
