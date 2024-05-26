const apiReducer = (state, action) => {
  switch (action.type) {
    case "REQUEST":
      console.log("im here");
      return { ...state, loading: true, error: null };
    case "SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default apiReducer;
