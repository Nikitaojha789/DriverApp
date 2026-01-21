// import * as ApiUrl from '../baseUrl';
// import {
//   checkRegisterRes,
//   checkResponse,
//   DeleteRequest,
//   GetRequest,
//   PostRequest,
// } from '../request';

// export const loginUserByApi = async ({form}: {form: any}) => {
//   const obj = {
//     detail: '',
//   };
//   const res = await PostRequest({
//     url: ApiUrl.loginUrl,
//     data: form,
//     header: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });
//   if (checkResponse(res)) {
//     obj.detail = res.data;
//   }
//   return obj;
// };