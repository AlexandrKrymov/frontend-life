import { required, email } from "vuelidate/lib/validators";
const phoneValidate = value => {
  if (value) {
    return /[0-9 ()+-\s]+/.test(value);
  }
  return true;
};

const touchMap = new WeakMap();

export default class {

  constructor(fields) {
    if (typeof fields == 'object') {
      this.__fields = fields;
    } else {
      console.warn('Не передан массив полей в конструктор');
    }
  }

  __fieldsName() {
    return {
      name: 'Имя',
      email: 'Email',
      phone: 'Телефон',
      comment: 'Сообщение',
      project: 'Проект',
      rating: 'Рейтинг',
      rewiew: 'Отзыв'
    }
  }

  __validations() {
    return {
      name: {
        required
      },
      email: {
        required,
        email
      },
      phone: {
        phoneValidate
      },
      comment: {},
      project: {},
      rating: {
        required
      },
      review: {}
    }
  }

  get validations() {
    let result = {};
    if (typeof this.__fields == 'object') {
      this.__fields.forEach(field => result[field] = this.__validations()[field]);
    } else {
      console.warn('Не передан массив полей в конструктор');
    }
    return result;
  }

  delayTouch($v) {
    $v.$reset();
    if (touchMap.has($v)) {
      clearTimeout(touchMap.get($v));
    }
    touchMap.set($v, setTimeout($v.$touch, 1000));
  }

  resetForm(form) {
    if (typeof this.__fields == 'object') {
      this.__fields.forEach(field => form[field] = "");
      form.$v.$reset();
    } else {
      console.warn('Не передан массив полей в конструктор');
    }
  }

  submit(form) {
    form.$v.$touch();
    if (!form.$v.$invalid) {

      let fields = {};
      if (typeof this.__fields == 'object') {
        // Собираем объект со свойствами и данными из полей формы для отправки формы
        this.__fields.forEach(field => fields[this.__fieldsName()[field]] = form[field]);
        // Отправляем форму
        form.$store.dispatch("submitForm", fields);
        this.resetForm(form, this.__fields);
      } else {
        console.warn('Не передан массив полей в конструктор');
      }
    }
  }
}
