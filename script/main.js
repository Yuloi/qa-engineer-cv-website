import { switchTab } from "./tab-switch.js"

const interestOption = document.querySelector('.skills-option')
const skillOption = document.querySelector('.interests-option')
const skillList = document.querySelector('.skills-list')
const interestsList = document.querySelector('.interests-list')

interestOption.addEventListener("click", ()=>switchTab(skillList,interestsList))
skillOption.addEventListener("click", ()=>switchTab(interestsList,skillList))

