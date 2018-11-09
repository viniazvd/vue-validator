export function getSnapshots () {
  const validation = this.$options.validation

  /* eslint-disable */
  const { validations = {}, messages = {}, ...data } = this.$data
  /* eslint-enable */

  return Object.entries(data).reduce((acc, [dataKey, dataValue]) => {
    Object.keys(validation).forEach(validationKey => (validationKey === dataKey) && (acc[dataKey] = dataValue))

    return acc
  }, {})
}
