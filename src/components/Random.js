
const Random = ({min, max}) => {

    function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }
  return (
    <p>{randomNumber(min, max)}</p>
  )
}

export default Random