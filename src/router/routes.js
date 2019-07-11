import Home from '../pages/Home.vue'
import Testimonials from '../pages/Testimonials.vue'
import Portfolio from '../pages/Portfolio.vue'
import PortfolioItem from '../pages/PortfolioItem.vue'
import Contacts from '../pages/Contacts.vue'
import Callback from '../pages/Callback.vue'
import LeaveReview from '../pages/LeaveReview.vue'

export default [
  {
    name: 'home__ru', path: '/', component: Home
  },
  {
    name: 'callback__ru', path: '/callback', component: Callback
  },
  {
    name: 'testimonials__ru', path: '/testimonials', component: Testimonials
  },
  {
    name: 'leave-review__ru', path: '/testimonials/leave-review', component: LeaveReview
  },
  {
    name: 'portfolio__ru', path: '/portfolio', component: Portfolio
  },
  {
    name: 'portfolio-item__ru', path: '/portfolio/item/:slug', component: PortfolioItem, props: true
  },
  {
    name: 'portfolio-cat__ru', path: '/portfolio/:cat', component: Portfolio, props: true
  },
  {
    name: 'contacts__ru', path: '/contacts', component: Contacts
  },
  {
    name: 'home__en',
    path: '/en',
    component: Home
  },
  {
    name: 'callback__en', path: '/en/callback', component: Callback
  },
  {
    name: 'testimonials__en', path: '/en/testimonials', component: Testimonials
  },
  {
    name: 'leave-review__en', path: '/en/testimonials/leave-review', component: LeaveReview
  },
  {
    name: 'portfolio__en', path: '/en/portfolio', component: Portfolio
  },
  {
    name: 'portfolio-item__en', path: '/en/portfolio/item/:slug', component: PortfolioItem, props: true
  },
  {
    name: 'portfolio-cat__en', path: '/en/portfolio/:cat', component: Portfolio, props: true
  },
  {
    name: 'contacts__en', path: '/en/contacts', component: Contacts
  }
]
