import axios from 'axios'
import { api, form, review } from '../config/config'

export default {
  getPortfolioItems(context, payload) {
    context.commit('changeLoadingStatus', true);
    axios
      .get(api + '/projects')
      .then(response => {
        const projects = [];
        for (let i = 0; i < response.data.length; i++) {
          let project = {
            id: response.data[i].id,
            slug: response.data[i].slug,
            title_ru: response.data[i].title,
            title_en: response.data[i].title_en,
            description_ru: response.data[i].description,
            description_en: response.data[i].description_en,
            thumbnail: response.data[i].thumbnail,
            success: response.data[i].success,
            year: response.data[i].year,
            cats: [],
          };
          if (response.data[i].cats.length) {
            for (let j = 0; j < response.data[i].cats.length; j++) {
              project.cats.push({
                id: response.data[i].cats[j].term_id,
                name: response.data[i].cats[j].name,
                slug: response.data[i].cats[j].slug,
              });
            }
          }
          projects.push(project);
        }
        context.commit('addPortfolioItems', projects);
        context.commit('changeLoadingStatus', false);
      });
  },
  getPortfolioCats(context, payload) {
    context.commit('changeLoadingStatus', true);
    axios
      .get(api + '/portfolio')
      .then(responsive => {
        let cats = [];
        for (let i = 0; i < responsive.data.length; i++) {
          let cat = {
            id: responsive.data[i].id,
            name_ru: responsive.data[i].name,
            name_en: responsive.data[i].slug,
            slug: responsive.data[i].slug,
            count: responsive.data[i].count
          }
          cats.push(cat);
        }
        context.commit('addPortfolioCats', cats);
        context.commit('changeLoadingStatus', false);
      })
  },
  getReviews(context, payload) {
    context.commit('changeLoadingStatus', true);
    axios
      .get(api + '/reviews')
      .then(response => {
        const reviews = [];
        for (let i = 0; i < response.data.length; i++) {
          let review = {
            id: response.data[i].id,
            name_ru: response.data[i].name,
            name_en: response.data[i].name_en,
            project_ru: response.data[i].project,
            project_en: response.data[i].project_en,
            text_ru: response.data[i].text,
            text_en: response.data[i].text_en,
            rating: response.data[i].rating
          };
          reviews.push(review);
        }
        context.commit('addReviews', reviews);
        context.commit('changeLoadingStatus', false);
      });
  },
  submitForm(context, payload) {
    context.commit('changeSubmitStatus', 'Pending');
    const str = JSON.stringify(payload);
    axios({
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "multipart/form-data"
      },
      url: form,
      data: str
    })
      .then(response => {
        context.commit('changeSubmitStatus', 'Ok');
        context.commit('changeCallbackFormStatus', 'success');
        setTimeout(() => {
          context.commit('changeCallbackFormStatus', '');
        }, 5000);
      })
      .catch(err => {
        console.error(err);
        context.commit('changeSubmitStatus', 'Error');
      })
  },
  createReview(context, payload) {
    context.commit('changeSubmitStatus', 'Pending');
    const str = JSON.stringify(payload);
    axios({
      method: 'post',
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "multipart/form-data"
      },
      url: review,
      data: str
    })
      .then(response => {
        context.commit('changeSubmitStatus', 'Ok');
        context.commit('changeCallbackFormStatus', 'success');
        setTimeout(() => {
          context.commit('changeCallbackFormStatus', '');
        }, 5000);
      })
      .catch(err => {
        console.error(err);
        context.commit('changeSubmitStatus', 'Error');
      })
  }
}
