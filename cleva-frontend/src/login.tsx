import React, { useContext, useState } from "react";
import "./App.css";

/**
 * Axios should use the currently active session of a user for all API calls.
 * If the session is expired for some reason, it should, it should refresh it.
//  */
// export async function setupAxiosAuth() {
//     Axios.interceptors.request.use((config) => {
//
//         return new Promise((resolve, reject) => {
//             Auth.currentSession()
//                 .then((session) => {
//                     var idTokenExpire = session.getIdToken().getExpiration();
//                     var refreshToken = session.getRefreshToken();
//                     config.headers.Authorization = "Bearer " + session.getIdToken().getJwtToken();
//                     var currentTimeSeconds = Math.round(+new Date() / 1000);
//                     if (idTokenExpire < currentTimeSeconds) {
//                         Auth.currentAuthenticatedUser()
//                             .then((res) => {
//                                 res.refreshSession(refreshToken, (err, data) => {
//                                     if (err) {
//                                         ("Failed to refresh user token")
//                                         Auth.signOut()
//                                     } else {
//                                         config.headers.Authorization = "Bearer " + data.getIdToken().getJwtToken();
//                                         resolve(config);
//                                     }
//                                 });
//                             });
//                     } else {
//                         config.headers.Authorization = "Bearer " + session.getIdToken().getJwtToken();
//                         resolve(config);
//                     }
//                 })
//                 .catch(() => {
//                     // No logged-in user: don't set auth header
//                     resolve(config);
//                 });
//         });
//     });
// }
