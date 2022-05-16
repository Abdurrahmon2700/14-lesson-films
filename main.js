// Elemntlarni chaqirish
let elInfoList = $("ul");
let elForm = $("form");
let elInput = $("input");

// qidiruv natijasini o'zida jamlovchi array
let filmName = [];

// objectdan kinolarni fetch qilish
kinolar.forEach(function (kino) {

  let newLi = elCreateElement("li", "card col-3 col-sm-3", "");
  let titleMovie = elCreateElement("p", "", `Name:  ${kino.title}`);
  let movieJanr = elCreateElement("p", "", `Genres:  ${kino.genres}`);
  let movieCast = elCreateElement("p", "", `Cast:  ${kino.cast}`);
  let movieYear = elCreateElement("p", "", `Year:  ${kino.year}`);

  newLi.append(titleMovie, movieJanr, movieCast, movieYear)
  elInfoList.append(newLi)

});

// qiriduv jarayoni
elForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let elInputVal = elInput.value.trim();
  let searchRegex = new RegExp(elInputVal, "gi");

  kinolar.forEach(function (kino) {

    if (kino.title.match(searchRegex)) {

      filmName.push(kino);
      elInfoList.innerHTML = null;
      filmName.forEach(function (film) {

        elInfoList.innerHTML = null;
        let newLi = elCreateElement("li", "card col-3 col-sm-3", "");
        let titleMovie = elCreateElement("p", "", `Name:  ${kino.title}`);
        let movieJanr = elCreateElement("p", "", `Genres:  ${kino.genres}`);
        let movieCast = elCreateElement("p", "", `Cast:  ${kino.cast}`);
        let movieYear = elCreateElement("p", "", `Year:  ${kino.year}`);


        newLi.append(titleMovie, movieJanr, movieCast, movieYear)
        elInfoList.append(newLi)
      })
    }
  })
})