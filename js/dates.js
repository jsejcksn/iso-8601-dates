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

document.body.innerHTML = (
  '<div class="day">' + date.day + '</div>' +
  '<div class="year subtle">' + date.year + '</div>' +
  '<div>' + el.subtle('W') + date.week + el.subtle('-') + date.weekDay + '</div>' +
  '<div>' + date.month + el.subtle('-') + date.date + '</div>' +
  '<div>' + date.dateOrdinal + '</div>'
);
