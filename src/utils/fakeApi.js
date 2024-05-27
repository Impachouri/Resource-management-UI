export const fakeApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject([{ id: 1, title: "Example", tag: "request" }]);
    }, 3000);
  });
};
