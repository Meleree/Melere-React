export const footer = (div) =>{
  const divFooter = document.createElement('div')

  const p = document.createElement('p')
  p.innerText = "Soy el Footer"

  divFooter.append(p)
  div.append(divFooter)
}

export default footer;  
