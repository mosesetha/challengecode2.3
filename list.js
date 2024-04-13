document.addEventListener("DOMContentLoaded", function() {
    const itemHeaders = document.querySelectorAll(".item-header");
    itemHeaders.forEach(itemHeader =>{
        itemHeader.addEventListener( "click", function() {
            const itemContent = this.nextElementsibling;
            itemContent.style.display = itemContent.style.display === "none" ? "block" : "none";
        })
    }
    )
}