
export function isFormInvalid(err: any) {
    if (Object.keys(err).length > 0) return true
    return false
}
  