export default {
  getH1: state => (page, local) => {
    return state.pages[page].h1[local];
  },
  getLoadingStatus: state => {
    return state.loading;
  },
  getPortfolioCats: state => {
    return state.pages.portfolio.cats;
  },
  getPortfolioItems: state => {
    return state.projects;
  },
  getPortfolioCats: state => {
    return state.portfolioCats;
  },
  getReviews: state => {
    return state.reviews;
  },
  getSubmitStatus: state => {
    return state.submitStatus;
  },
  getCallbackFormStatus: state => {
    return state.callbackFormStatus;
  }
}
