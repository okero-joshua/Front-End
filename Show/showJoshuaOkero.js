$(document).ready( () => {
    $("#jdom a").click( evt => {
    evt.preventDefault();
    const a = evt.currentTarget;
    const divID = $(a).attr("href");
    $(divID).toggleClass();
    $(divID).attr("class")=="hide" ? $(a).text("Show Less"): $(a).text("Show More")
});
});
