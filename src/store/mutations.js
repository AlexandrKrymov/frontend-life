export default {
  changeLoadingStatus (state, payload){
    state.loading = payload;
  },
  addPortfolioItems (state, payload){
    state.projects = payload;
  },
  addPortfolioCats (state, payload){
    state.portfolioCats = payload;
  },
  addReviews (state, payload){
    state.reviews = payload;
  },
  changeSubmitStatus (state, payload){
    state.submitStatus = payload;
  },
  changeCallbackFormStatus (state, payload){
    state.callbackFormStatus = payload;
  }
}
