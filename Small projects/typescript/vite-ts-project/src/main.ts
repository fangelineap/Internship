import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'

const initApp = (): void => {
  const fullList = FullList.instance
  const listTemplate = ListTemplate.instance

  // add new item
  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
  itemEntryForm.addEventListener('submit', (event: SubmitEvent): void => {
    event.preventDefault()

    const input = document.getElementById("newItem") as HTMLInputElement
    const newEntryText: string = input.value.trim()
    if(!newEntryText.length) return

    const itemId: number = fullList.list.length 
    ? parseInt(fullList.list[fullList.list.length-1].id) + 1 : 1

    const newItem = new ListItem(itemId.toString(), newEntryText)

    fullList.addItem(newItem)
    listTemplate.render(fullList)
  })

  // clear items
  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement
  clearItems.addEventListener('click', (): void => {
    fullList.clear()
    listTemplate.clear()
  })

  // load and render saat app baru berjalan
  fullList.load()
  listTemplate.render(fullList)
}

// memastikan elements dalam DOM content sudah diload semua
document.addEventListener("DOMContentLoaded", initApp)