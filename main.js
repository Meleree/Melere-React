import titulo from "./titulo.js"
import footer from "./footer.js"
import botones from "./botones.js"

const app = () => {
  const div = document.getElementById('root')

  titulo(div);
  footer(div);
  botones(div);
}

app();