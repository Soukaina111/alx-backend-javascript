import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let outcome = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    outcome = { photo, user };
  } catch (err) {
    outcome = { photo: null, user: null };
  }
  return outcome;
}
