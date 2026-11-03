export function getTestData() {
  const id = Date.now();
  return {
    username: `${process.env.USERNAME}${id}`,
    email: `${process.env.EMAIL}_${id}@gmail.com`,
    password: `process.env.PASSWORD!`,
  };
}