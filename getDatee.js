const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth();
  const year = date.getFullYear();
  return `${days}-${months}-${year}`
}
console.log(formatDate());