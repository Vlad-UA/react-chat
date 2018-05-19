export default function titleInitials(props) {
  try {
    return props.title
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, props.lettersQuantity)
  } catch (e) {
    console.error(e);
    return ':)'
  }
}
