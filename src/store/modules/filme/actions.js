export function updateProfileRequest(data) {
  return {
    type: '@filme/UPDATE_PROFILE_REQUEST',
    payload: {data},
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@filme/UPDATE_PROFILE_SUCCESS',
    payload: {profile},
  };
}

export function updateProfileFailure() {
  return {
    type: '@filme/UPDATE_PROFILE_FAILURE',
  };
}
