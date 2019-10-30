import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import * as Yup from 'yup';
import { Container } from './styles';
// import DatePicker from '~/components/DatePicker';
import BannerInput from './BannerInput';
import MaskInput from '~/components/MaskInput';
import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  description: Yup.string().required('A descrição é obrigatória'),
  date: Yup.date('Data inválida')
    .typeError('Data inválida')
    .required('A data é obrigatória'),
  localization: Yup.string().required('A localização é obrigatória'),
  image_id: Yup.number().required('É obrigatório inserir um banner'),
});

export default function Register() {
  const { meetup } = useSelector(state => state.meetup);
  const userId = useSelector(state => state.user.profile.id);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    if (meetup) {
      dispatch(updateMeetupRequest(meetup.id, data));
    } else {
      dispatch(createMeetupRequest({ ...data, user_id: userId }));
    }
  }
  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <BannerInput />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <MaskInput
          name="date"
          placeholder="Data do meetup"
          mask="99/99/9999 99:00:00"
        />
        <Input name="localization" placeholder="Localização" />
        <button type="submit">
          <MdAddCircleOutline />

          <span>Salvar meetup</span>
        </button>
      </Form>
    </Container>
  );
}
