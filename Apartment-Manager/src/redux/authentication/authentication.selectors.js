import { createSelector } from "@reduxjs/toolkit";

const authSession = (state) => state.session;

export const getAuthSession = createSelector([authSession], (session) => session.auth);