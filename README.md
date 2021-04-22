# techdegree-project-2
## List Pagination and Filtering


Live Version:  https://simonfeu.github.io/techdegree-project-2/

![image](https://user-images.githubusercontent.com/63255333/115661033-27bd9300-a33d-11eb-9d8c-f49b23848554.png)

## About the Project
In this project, i used a common web development technique known as "pagination" to enhance the usability of a web page.
This is done by using the principle of "progressive enhancement (The page should still display the students' names 
without JavaScript turned on, but will be much improved (enhanced) with the JavaScript programming you add).
The pagination solution will work with a list of any number of students.

## Code example

### showPage function
 * Function 'showPage' hiedes all students except of the number stored in the variable 'numberOfItems'
   Parameters: The function takes two parameters. 'list' for the list of all students and 'page' for 
   the page number which will be displayed
 * Within the function a start index and an end index is calculated, which are stored in the variables 
   of the same name ('startIndex' and 'endIndex').
 * The for-loop loops over the list of students and sets the value of display to "" for list items between '
   startIndex' and 'endIndex'. The remaining list items are set to a display value of none.
   
```javascript
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
```

### appendPageLinks function
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

   
```javascript
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
```
