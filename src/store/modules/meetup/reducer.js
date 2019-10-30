import produce from 'immer';
import history from '~/services/history';

const INITIAL_STATE = {
  meetup: null,
};
export default function meetup(state = INITIAL_STATE, actions) {
  return produce(state, draft => {
    switch (actions.type) {
      case '@meetup/DETAIL': {
        draft.meetup = actions.payload.meetup;

        history.push('/meetup/detail');
        break;
      }
      case '@meetup/NEW': {
        draft.meetup = null;
        history.push('/meetup/register');
        break;
      }

      case '@meetup/EDIT': {
        history.push(`/meetup/register`);
        break;
      }

      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        draft.meetup = actions.payload.meetup;
        break;
      }

      case '@meetup/CREATE_MEETUP_SUCCESS': {
        draft.meetup = actions.payload.meetup;
        break;
      }

      case '@meetup/CANCEL_MEETUP_SUCCESS': {
        draft.meetup = null;
        break;
      }

      default:
    }
  });
}
