{
  'use strict';
  
  const date = {
    now: moment(),
    get day () {
      return moment(this.now).format('dddd');
    },
    get year () {
      return moment(this.now).format('Y');
    },
    get month () {
      return moment(this.now).format('MM');
    },
    get date () {
      return moment(this.now).format('DD');
    },
    get dateOrdinal () {
      return moment(this.now).format('DDDD');
    },
    get weekYear () {
      return moment(this.now).format('GGGG');
    },
    get week () {
      return moment(this.now).format('WW');
    },
    get weekDay () {
      return moment(this.now).format('E');
    }
  };

  const el = {
    subtle (str) {
      let span = `<span class="subtle">${str}</span>`;
      return span;
    }
  };

  const progress = {
    progress: document.querySelector('.progress'),
    init () {
      let bar = document.createElement('div');
      const barClass = 'progress-bar';
      bar.classList.add(barClass);
      this.progress.insertAdjacentElement('beforeend', bar);
      this.bar = document.querySelector(`.${barClass}`);
    },
    update (position, max) {
      let pos;
      if (max) {
        pos = position / max;
      } else {
        pos = position / (23 * 60 + 59);
      }
      this.bar.style.width = `${pos * 100}%`;
    }
  };

  document.body.insertAdjacentHTML(
    'beforeend',
    (
      '<div class="day">' + date.day + '</div>' +
      '<div class="year subtle">' + date.year + '</div>' +
      '<div>' + el.subtle('W') + date.week + el.subtle('-') + date.weekDay + '</div>' +
      '<div>' + date.month + el.subtle('-') + date.date + '</div>' +
      '<div>' + date.dateOrdinal + '</div>'
    )
  );

  progress.init();
  progress.update(moment().hour() * 60 + moment().minute());
}
