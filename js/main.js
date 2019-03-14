filterSelection("work__filter-all") // Execute the function and show all columns
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("work__tile-holder");
    if (c == "work__filter-all") c = "";
    // Add the "work__show" class (display:block) to the filtered elements, and remove the "work__show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "work__show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "work__show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {work__filter
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
let work__filter = document.getElementById("work__filter");
let btns = work__filter.getElementsByClassName("work__filter-btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("work__filter-btn_active");
        current[0].className = current[0].className.replace(" work__filter-btn_active", "");
        this.className += " work__filter-btn_active";
    });
}