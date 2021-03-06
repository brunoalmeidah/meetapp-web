import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Form } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />

        <button type="submit">
          <MdAddCircleOutline />

          <span>Salvar Perfil</span>
        </button>
      </Form>
    </Container>
  );
}
