const path = "/users/download/index.html";

console.log(isHtml(path));

function isHtml(path) {
    return path.slice(path.length-4) === "html" ? true : false;
}