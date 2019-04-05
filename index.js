document.addEventListener('DOMContentLoaded', () => {
  const catContainer = document.getElementById('cat-container')
  const header = document.querySelector('#cat-header')
  const catHeader = document.querySelectorAll('.ui.header')
  

    header.addEventListener('click', ev => {
      ev.target.className = 'ui blue header center aligned'
  })
    // catHeader.map((cat) => {
    //   cat
    // })
    catContainer.addEventListener('click', ev => {
      const clicked = ev.target 
      if (clicked.matches('.ui.header')){
        clicked.className = 'ui header green'
      }else if (clicked.dataset.action === 'like'){
          const id = parseInt(clicked.dataset.id)
          let likeCount = document.getElementById(`cat-${id}`)
          let countNum = parseInt(likeCount.innerText)
            countNum += 1 
          likeCount.innerText = countNum 
          console.log(countNum)
        }
    })

   

  catContainer.innerHTML = renderCats()

})

function renderOneCat(cat) {
  return `<div class="ui card">
            <div class="image">
              <img src="${cat.photo}" height='100%'>
            </div>
            <div class="content">
              <div data-action='change-color' class="ui header">${cat.name}</div>
              <div class="meta">
                <span class="breed">Breed: ${cat.breed}</span>
              </div>
            </div>
            <div class="extra content">
              <a>
                <i data-action='like' data-id='${cat.id}' class="thumbs up icon"></i>
                <span id='cat-${cat.id}'>${cat.likes}</span> Likes
              </a>
            </div>
          </div>`
          
}

function renderCats() {
  return CATS.map(renderOneCat).join('')
}
