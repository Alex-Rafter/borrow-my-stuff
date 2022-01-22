getText('./data/lend.json')
const dataBtn = document.getElementById('dataBtn')

async function getText(file) {
  let myObject = await fetch(file)
  let myText = await myObject.text()
  console.log(myText)
}

dataBtn.addEventListener('click', function () {
    fetch('../csv.php')
        .then(
            getText('./data/lend.json')
        )
})
