window.onload = function() {
    document.getElementById("filterContent").style.display = "none";
    document.getElementById("newContent").style.display = "none";
}

function showFilter () {
    let filterContent = document.getElementById("filterContent");

    if (filterContent.style.display == "none") {
        filterContent.style.display = "block";
    } else {
        filterContent.style.display = "none";
    }
}

function showAddNew() {
    let newForm = document.getElementById("newContent");

    if (newForm.style.display == "none") {
        newForm.style.display = "flex";
    } else {
        newForm.style.display = "none";
    }
}

function filterArticles() {
    let articles = document.getElementsByTagName("article");
    let showOpinion = document.getElementById("opinionCheckbox").checked;
    let showRecipe = document.getElementById("recipeCheckbox").checked;
    let showUpdate = document.getElementById("updateCheckbox").checked;
    
    for (let i = 0; i < articles.length; i++) {

        let currentArticle = articles[i];
        let isOpinion = currentArticle.classList.contains("opinion");
        let isRecipe = currentArticle.classList.contains("recipe");
        let isUpdate = currentArticle.classList.contains("update");

        if (isOpinion) {
            if (showOpinion == true) {
                articles[i].style.display = "block";
            }
    
            else {
                articles[i].style.display = "none";
            }
        }

        if (isRecipe) {
            if (showRecipe == true) {
                articles[i].style.display = "block";
            }

            else {
                articles[i].style.display = "none";
            }
        }

        if (isUpdate) {
            if (showUpdate == true) {
                articles[i].style.display = "block";
            }

            else {
                articles[i].style.display = "none";
            }
        }
    }
}

function addNewArticle() {

    let inputHeader = document.getElementById("inputHeader").value;
    let article = document.getElementById("inputArticle").value;
    let opinions = document.getElementById("opinionRadio").checked;
    let recipies = document.getElementById("recipeRadio").checked;
    let updates = document.getElementById("lifeRadio").checked;
    let addNewArticle = document.createElement("article");
    let marker = document.createElement("span");
    let header = document.createElement("h2");
    let paragraph = document.createElement("p");
    let readMore = document.createElement("p");
    let finalArticle = document.getElementById("articleList");
    let articleType = "";

    if (opinions) {
        articleType = "opinion";
    }

    if (recipies) {
        articleType = "recipe";
    }

    if (updates) {
        articleType = "update";
    }

    addNewArticle.className = articleType;

    if (articleType == "opinion") {
        marker.innerText = "Opinion";
    }

    if (articleType == "recipe") {
        marker.innerText = "Recipe";
    }

    if (articleType == "update") {
        marker.innerText = "Update";
    }

    marker.className = "marker";
    header.innerText = inputHeader;    
    paragraph.innerText = article;
    readMore.innerHTML = '<a href="moreDetails.html">Read more...</a>';

    addNewArticle.appendChild(marker);
    addNewArticle.appendChild(header);
    addNewArticle.appendChild(paragraph);
    addNewArticle.appendChild(readMore);

    finalArticle.appendChild(addNewArticle);

    filterArticles();
}