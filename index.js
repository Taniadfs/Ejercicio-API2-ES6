const img = document.querySelector('.random-image')
const randomId = Math.floor(Math.random() * 151 + 1)
console.log(randomId)

fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
  .then((res) => res.json())
  .then((pokemonDatos) => {
    const spriteUrl = pokemonDatos.sprites.front_default
    img.src = spriteUrl
    img.alt = 'Pokemon'
  })
  .catch((error) => console.error(error))
