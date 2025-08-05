import { UserResponse } from '@/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
  deviceId: string | null;
  user: UserResponse | null;
  sessionStatus: 'anonymous' | 'private' | null;
  isOnboardingCompleted: boolean;
};

const initialState: AuthState = {
  deviceId: null,
  user: null,
  sessionStatus: null,
  isOnboardingCompleted: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAction(
      state,
      action: PayloadAction<
        Omit<AuthState, 'sessionStatus' | 'isOnboardingCompleted'>
      >,
    ) {
      state.user = action.payload.user;
      state.sessionStatus = 'private';
      state.deviceId = action.payload.deviceId;
      state.isOnboardingCompleted = state.isOnboardingCompleted ?? false;
    },
    setSessionStatusAction(
      state,
      action: PayloadAction<'anonymous' | 'private'>,
    ) {
      state.sessionStatus = action.payload;
    },
    logoutAction(state) {
      state.deviceId = null;
      state.user = null;
      state.sessionStatus = null;
    },
    setOnboardingCompletedAction(state, action: PayloadAction<boolean>) {
      state.isOnboardingCompleted = action.payload;
    },
  },
});

export const {
  loginAction,
  logoutAction,
  setSessionStatusAction,
  setOnboardingCompletedAction,
} = authSlice.actions;

export default authSlice.reducer;
