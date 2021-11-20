/*jshint esversion: 6 */

const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('https://willberries-1325f-default-rtdb.firebaseio.com/db.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  links.forEach((links) => {
    links.addEventListener('click', (event) => {
      event.preventDefault();
      getData();

    });
  });


  localStorage.setItem('getGoods', JSON.stringify([...data]));

};
getGoods();