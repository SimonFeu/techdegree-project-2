/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Creating a global variable that stores all student list items.
let studyList = document.querySelectorAll("li.student-item");
//Creating a variable containing the number of elements to be displayed on each page
let numberOfItems = 10;

/*** 
 * Function 'showPage' hiedes all students except of the number stored in the variable 'numberOfItems'
   Parameters: The function takes two parameters. 'list' for the list of all students and 'page' for 
   the page number which will be displayed
 * Within the function a start index and an end index is calculated, which are stored in the variables 
   of the same name ('startIndex' and 'endIndex').
 * The for-loop loops over the list of students and sets the value of display to "" for list items between '
   startIndex' and 'endIndex'. The remaining list items are set to a display value of none.
***/
function showPage(list, page) {
  let startIndex = page * numberOfItems - numberOfItems;
  let endIndex = page * numberOfItems;
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}

/*** 
 * This function accepts the parameter 'list' for the list of all students
 * Inside the function:
   DOM elements are created and inserted into the website according to the following scheme:

          <div class="pagination">
                  <ul>
                    <li>
                      <a class="active" href="#">1</a>
                    </li>
                    <li>
                      <a href="#">2</a>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
                    </li>
                    <li>
                      <a href="#">5</a>
                    </li>
                  </ul>
          </div>

  * When a page link is clicked, the active class is removed from all links and added to the currently clicked link
***/

function appendPageLinks(list) {
  let pageDiv = document.querySelector("div.page");
  let paginationDiv = document.createElement("div");
  paginationDiv.className = "pagination";
  let ul = document.createElement("ul");
  for (let i = 0; i <= list.length / numberOfItems; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = "#";
    a.textContent = i + 1;
    if (i == 0) {
      a.className = "active";
    }
    li.appendChild(a);
    ul.appendChild(li);
  }
  paginationDiv.appendChild(ul);
  pageDiv.appendChild(paginationDiv);
}

//Div element with the class 'page' is stored in the Variable 'pageDiv'. On this DIV we put an EventHandler.
let pageDiv = document.querySelector(".page");

/***
 * If an event click is triggered in the DIV page, the EventHandler is executed.
 * First all link elements with the tag-name 'a' are stored in the variable aTags.
 * If the clicked element has the tag-name 'a' a for-loop loops over all elements stored in the variable aTags and
   sets the className to "".
 * The className of the clicked element will be set to "active"
 * Then the function 'showPage' is executed. It takes as parameters the list of all students and the page number 
   (via the textContent of the clicked link)
***/
pageDiv.addEventListener("click", e => {
  let aTags = document.querySelectorAll("a");
  if (e.target.tagName === "A") {
    for (let i = 0; i < aTags.length; i++) {
      aTags[i].className = "";
    }
    e.target.className = "active";
    showPage(studyList, e.target.textContent);
  }
});

//Here the functions 'showPage' and 'appendPageLinks' for the start allocation are called
showPage(studyList, 1);
appendPageLinks(studyList);
