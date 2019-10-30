export function detail(meetup) {
  return {
    type: '@meetup/DETAIL',
    payload: { meetup },
  };
}

export function newMeetup() {
  return {
    type: '@meetup/NEW',
  };
}
export function editMeetup() {
  return {
    type: '@meetup/EDIT',
  };
}

export function updateMeetupRequest(id, meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: {
      id,
      meetup,
    },
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: {
      meetup,
    },
  };
}

export function createMeetupRequest(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: {
      meetup,
    },
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: {
      meetup,
    },
  };
}

export function cancelMeetupRequest(id) {
  return {
    type: '@meetup/CANCEL_MEETUP_REQUEST',
    payload: {
      id,
    },
  };
}

export function cancelMeetupSuccess() {
  return {
    type: '@meetup/CANCEL_MEETUP_SUCCESS',
  };
}
