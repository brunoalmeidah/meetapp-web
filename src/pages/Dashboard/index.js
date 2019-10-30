import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdNavigateNext } from 'react-icons/md';
import api from '~/services/api';
import { Container, Header, MeetupList } from './styles';
import { detail, newMeetup } from '~/store/modules/meetup/actions';

export default function Dashboard() {
  const [meetups, setMeetup] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizers');
      const data = response.data.map(item => ({
        ...item,
        dateFormatted: format(
          parseISO(item.date),
          "dd 'de' MMMM ', às 'HH'h'",
          {
            locale: pt,
          }
        ),
      }));
      setMeetup(data);
    }
    loadMeetups();
  }, []);

  function handleDetail(meetup) {
    dispatch(detail(meetup));
  }
  function handleNew() {
    dispatch(newMeetup());
  }
  return (
    <Container>
      <Header>
        <h1>Meus Meetups</h1>
        <button type="button" onClick={handleNew}>
          <MdAddCircleOutline />

          <span>Novo meetup</span>
        </button>
      </Header>
      <MeetupList>
        {meetups.map(meetup => (
          <li>
            <button type="button" onClick={() => handleDetail(meetup)}>
              <strong>{meetup.title}</strong>
              <div>
                <span>{meetup.dateFormatted}</span>
                <MdNavigateNext />
              </div>
            </button>
          </li>
        ))}
      </MeetupList>
    </Container>
  );
}
