export const fakeApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{ id: 1, title: "Example", tag: "request" }]);
    }, 1000);
  });
};
