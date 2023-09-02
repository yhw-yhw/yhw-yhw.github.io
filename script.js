// // Get the links
// const showAllLink = document.querySelector('#showAll');
// const showToShowLink = document.querySelector('#showToShow');

// // Get all table rows
// const tableRows = document.querySelectorAll('#pub_lists tbody tr');

// // Show all table rows by default
// tableRows.forEach((row) => {
//   row.classList.add('show');
// });

// // Add event listeners to the links
// showAllLink.addEventListener('click', () => {
//   // Show all table rows
//   tableRows.forEach((row) => {
//     row.classList.add('show');
//   });
// });

// showToShowLink.addEventListener('click', () => {
//   // Hide all table rows
//   tableRows.forEach((row) => {
//     row.classList.remove('show');
//   });

//   // Show only the 'elements-to-show' rows
//   const elementsToShow = document.querySelectorAll('.elements-to-show');
//   elementsToShow.forEach((element) => {
//     element.classList.add('show');
//   });
// });


// Get the links
// const showAllLink = document.querySelector('#showAll');
// const showToShowLink = document.querySelector('#showToShow');

// // Get all table rows
// const tableRows = document.querySelectorAll('#pub_lists tbody tr');

// // Hide all table rows by default
// tableRows.forEach((row) => {
//   row.classList.remove('show');
// });

// // Add class to selected rows
// const elementsToShow = document.querySelectorAll('.elements-to-show');
// elementsToShow.forEach((element) => {
//   element.classList.add('show');
// });

// // Add event listeners to the links
// showAllLink.addEventListener('click', () => {
//   // Show all table rows
//   tableRows.forEach((row) => {
//     row.classList.add('show');
//   });
// });

// showToShowLink.addEventListener('click', () => {
//   // Hide all table rows
//   tableRows.forEach((row) => {
//     row.classList.remove('show');
//   });

//   // Show only the 'elements-to-show' rows
//   elementsToShow.forEach((element) => {
//     element.classList.add('show');
//   });
// });

// Get the links
const showAllLink = document.querySelector('#showAll');
const showToShowLink = document.querySelector('#showToShow');

// Get all table rows
const tableRows = document.querySelectorAll('#pub_lists tbody tr');

// Add class to all table rows
tableRows.forEach((row) => {
  row.classList.add('show');
});

// Add event listeners to the links
showAllLink.addEventListener('click', () => {
  // Show all table rows
  tableRows.forEach((row) => {
    row.classList.add('show');
  });
});

showToShowLink.addEventListener('click', () => {
  // Hide all table rows
  tableRows.forEach((row) => {
    row.classList.remove('show');
  });

  // Show only the selected elements
  const elementsToShow = document.querySelectorAll('.elements-to-show');
  elementsToShow.forEach((element) => {
    element.classList.add('show');
  });
});
