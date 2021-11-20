/*jshint esversion: 6 */

const search = () => {
  const input = document.querySelector('.search-block > input');
  const serchBtn = document.querySelector('.search-block > button');


  serchBtn.addEventListener('click', () => {
    console.log(input.value);
  });
};
search();


// const search = () => {
//   const input = document.querySelector('.search-block > input');
//   const serchBtn = document.querySelector('.search-block > button');

//   input.addEventListener('input', (event) => {
//     console.log(event.target.value);
//   });
// };
// search();