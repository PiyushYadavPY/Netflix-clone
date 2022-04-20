const tabItems= document.querySelectorAll('.tab-item');
const tabContentItems=document.querySelectorAll('.tab-content-item');

// select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    // add border to current tab
    this.classList.add('tab-border');

    // Grab content items from DOM
    const tabContentItem= document.querySelector(`#${this.id}-content`);
   
    

    // Add show class
    tabContentItem.classList.add('show');

}
// Remove Bottom border from all tab items
function removeBorder(){
    tabItems.forEach(item=>{ item.classList.remove('tab-border');
});
}

// Remove show class from all content items
function removeShow(){
    tabContentItems.forEach(item=> {item.classList.remove('show');
});
}


tabItems.forEach(item =>item.addEventListener('click',selectItem));