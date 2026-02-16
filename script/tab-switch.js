export function switchTab(currentTab,newTab) {
        if(currentTab.classList.contains('hidden')){
               currentTab.classList.remove('hidden')
               newTab.classList.add('hidden')
        }

}