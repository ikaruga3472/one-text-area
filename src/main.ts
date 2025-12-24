import './style.css'

const textarea = document.querySelector<HTMLTextAreaElement>('#note')
const countNoSpace = document.querySelector<HTMLSpanElement>('#count-no-space')
const countWithSpace = document.querySelector<HTMLSpanElement>('#count-with-space')

if (textarea && countNoSpace && countWithSpace) {
  const updateCounts = () => {
    const value = textarea.value
    const noSpaceCount = value.replace(/\s/g, '').length
    countNoSpace.textContent = String(noSpaceCount)
    countWithSpace.textContent = String(value.length)
  }

  textarea.addEventListener('input', updateCounts)
  updateCounts()
}
