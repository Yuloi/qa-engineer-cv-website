import { switchTab } from "./tab-switch"

const interestTab = document.querySelector('.interests-list')
const skillTab = document.querySelector('.skills-list')

interestTab.addEventListener('click', switchTab(skillTab,interestTab))