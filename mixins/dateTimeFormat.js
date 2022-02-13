import moment from 'moment'

const mixinDateTimeFormat = {
  methods: {
    dateTimeFormat(d, f = 'YYYY-MM-DD') {
      return moment(d).format(f)
    }
  }
}

export default mixinDateTimeFormat
