const languages  = [
    {
        name  : "Java",
        first_appeared : "1995"
    },
    {
        name  : "Javascript",
        first_appeared : "1995"
    },
    {
        name  : "PHP",
        first_appeared : "1994"
    },
    {
        name  : "Python",
        first_appeared : "1991"
    },
    {
        name  : "C",
        first_appeared : "1972"
    }
];

{/* <ul class="list-group">
            <li class="list-group-item">
                Javascript <span class="float-right">December 4, 1995</span>
            </li>
</ul> */}

function generateList(){
    const ul = document.querySelector(".list-group");
    languages.forEach((language ) => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(language.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const spanVal = document.createTextNode(language.name);
        span.appendChild(spanVal);

        li.appendChild(span);
        ul.appendChild(li);

    })
}

generateList();
