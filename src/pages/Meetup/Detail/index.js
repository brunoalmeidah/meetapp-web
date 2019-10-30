import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever, MdEdit, MdLocationOn } from 'react-icons/md';
import { IoMdCalendar } from 'react-icons/io';
import {
  editMeetup,
  cancelMeetupRequest,
} from '~/store/modules/meetup/actions';
import { Container, Header, EditButton, CancelButton, Footer } from './styles';

export default function Detail() {
  const { meetup } = useSelector(state => state.meetup);
  const dispatch = useDispatch();
  function handleEdit() {
    dispatch(editMeetup());
  }
  function handleCancel(id) {
    dispatch(cancelMeetupRequest(id));
  }
  return (
    <Container>
      <Header>
        <h1>{meetup.title}</h1>
        <div>
          <EditButton onClick={handleEdit}>
            <MdEdit />
            <span>Editar</span>
          </EditButton>

          <CancelButton onClick={() => handleCancel(meetup.id)}>
            <MdDeleteForever />
            <span>Cancelar</span>
          </CancelButton>
        </div>
      </Header>
      <img src={meetup.image.url} alt="Meetup de react native" />
      <p>{meetup.description}</p>
      <Footer>
        <span>
          <IoMdCalendar />
          {meetup.dateFormatted}
        </span>
        <span>
          <MdLocationOn /> {meetup.localization}
        </span>
      </Footer>
    </Container>
  );
}
