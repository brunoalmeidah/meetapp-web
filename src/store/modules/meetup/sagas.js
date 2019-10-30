import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  updateMeetupSuccess,
  createMeetupSuccess,
  cancelMeetupSuccess,
} from './actions';
import history from '~/services/history';

export function* updateMeetup({ payload }) {
  try {
    const { id, meetup } = payload;

    const response = yield call(api.put, `meetups/${id}`, meetup);

    toast.success('Meetup atualizado com sucesso');

    yield put(updateMeetupSuccess(response.data));
    history.push(`/meetup/detail`);
  } catch (error) {
    toast.error(`Erro ao atualizar o meetup`);
    console.tron.log(error);
    // yield put(updateProfileFailure());
  }
}

export function* createMeetup({ payload }) {
  try {
    const { meetup } = payload;

    const response = yield call(api.post, 'meetups', meetup);

    toast.success('Meetup criado com sucesso');

    yield put(createMeetupSuccess(response.data));

    history.push(`/meetup/detail`);
  } catch (error) {
    toast.error(`Erro ao criar o meetup : ${error}`);
    console.tron.log(error);
    // yield put(updateProfileFailure());
  }
}
export function* cancelMeetup({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`);

    toast.success('Meetup cancelado com sucesso');
    history.push('/dashboard');
    yield put(cancelMeetupSuccess());
  } catch (error) {
    toast.error(`Erro ao cancelar o meetup : ${error}`);
    console.tron.log(error);
    // yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/CANCEL_MEETUP_REQUEST', cancelMeetup),
]);
